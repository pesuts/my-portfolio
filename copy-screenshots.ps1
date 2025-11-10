# Script to Copy Project Screenshots
# Run this in PowerShell from the portfolio-website directory

# Base paths
$projectsPath = "d:\DEVELOPER\WEB DEV\PORTFOLIO\projects"
$screenshotsPath = "d:\DEVELOPER\WEB DEV\PORTFOLIO\portfolio-website\public\screenshots"

Write-Host "Copying screenshots from projects..." -ForegroundColor Green

# Create screenshots directory if it doesn't exist
if (-not (Test-Path $screenshotsPath)) {
    New-Item -ItemType Directory -Path $screenshotsPath
    Write-Host "Created screenshots directory" -ForegroundColor Yellow
}

# Function to copy screenshots
function Copy-ProjectScreenshots {
    param (
        [string]$ProjectFolder,
        [string]$Prefix
    )
    
    $screenshotFolder = Join-Path $projectsPath $ProjectFolder
    
    if (Test-Path $screenshotFolder) {
        $files = Get-ChildItem -Path $screenshotFolder -Include *.png,*.jpg,*.jpeg,*.gif -Recurse
        
        if ($files) {
            $counter = 1
            foreach ($file in $files) {
                $newName = "$Prefix-$counter$($file.Extension)"
                $destination = Join-Path $screenshotsPath $newName
                Copy-Item -Path $file.FullName -Destination $destination -Force
                Write-Host "Copied: $newName" -ForegroundColor Cyan
                $counter++
            }
        } else {
            Write-Host "No screenshots found in $ProjectFolder" -ForegroundColor Yellow
        }
    } else {
        Write-Host "Folder not found: $screenshotFolder" -ForegroundColor Red
    }
}

# Copy screenshots from each project
Write-Host "`nCopying from News App Mobile..." -ForegroundColor Magenta
Copy-ProjectScreenshots -ProjectFolder "news-app-mobile-main\news-app-mobile-main\screenshots" -Prefix "news-app"

Write-Host "`nCopying from News Scraper..." -ForegroundColor Magenta
Copy-ProjectScreenshots -ProjectFolder "news-scraper-main\screenshots" -Prefix "news-scraper"

Write-Host "`nCopying from Todo App..." -ForegroundColor Magenta
Copy-ProjectScreenshots -ProjectFolder "todo-app-with-location-main\SCREENSHOTS" -Prefix "todo-app"

Write-Host "`nDone! Check the public/screenshots folder." -ForegroundColor Green
Write-Host "`nNote: For projects without screenshots, you'll need to:" -ForegroundColor Yellow
Write-Host "1. Take screenshots manually" -ForegroundColor Yellow
Write-Host "2. Or create placeholder images" -ForegroundColor Yellow
Write-Host "3. Update the image paths in src/data/projects.ts" -ForegroundColor Yellow
