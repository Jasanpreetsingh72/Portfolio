const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.scss')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            const newContent = content.replace(/([0-9]*\.?[0-9]+)rem/g, (match, p1) => {
                const val = parseFloat(p1);
                const newVal = Math.round((val * 1.6) * 1000) / 1000;
                modified = true;
                return `${newVal}rem`;
            });

            if (modified && newContent !== content) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Conversion complete.');
