const fs = require('fs');
const path = require('path');

const projectsBasePath = 'd:\\DEVELOPER\\WEB DEV\\PORTFOLIO\\projects';
const screenshotsPath = path.join(__dirname, 'public', 'screenshots');

// Ensure screenshots directory exists
if (!fs.existsSync(screenshotsPath)) {
  fs.mkdirSync(screenshotsPath, { recursive: true });
}

const projectMappings = [
  {
    name: 'news-app',
    path: 'news-app-mobile-main\\news-app-mobile-main\\screenshots'
  },
  {
    name: 'news-scraper',
    path: 'news-scraper-main\\screenshots'
  },
  {
    name: 'todo-app',
    path: 'todo-app-with-location-main\\SCREENSHOTS'
  }
];

console.log('🖼️  Copying screenshots from projects...\n');

projectMappings.forEach(({ name, path: projectPath }) => {
  const fullPath = path.join(projectsBasePath, projectPath);

  if (fs.existsSync(fullPath)) {
    const files = fs.readdirSync(fullPath)
      .filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file));

    if (files.length > 0) {
      files.forEach((file, index) => {
        const ext = path.extname(file);
        const newName = `${name}-${index + 1}${ext}`;
        const src = path.join(fullPath, file);
        const dest = path.join(screenshotsPath, newName);

        fs.copyFileSync(src, dest);
        console.log(`✅ Copied: ${newName}`);
      });
    } else {
      console.log(`⚠️  No screenshots found in ${name}`);
    }
  } else {
    console.log(`❌ Path not found: ${fullPath}`);
  }
});

console.log('\n✨ Done! Check public/screenshots folder.');
console.log('\n📝 Next steps:');
console.log('1. Take screenshots for projects without them');
console.log('2. Update image paths in src/data/projects.ts');
console.log('3. Test the portfolio: npm run dev');
