const fs = require('fs');
const path = require('path');

const structuralWords = [
    'section', 'container', 'box', 'card', 'row', 'col', 'column', 'sidebar',
    'button', 'logo', 'wrapper', 'layout', 'content', 'main', 'export', 'header',
    'footer', 'nav', 'tab', 'grid', 'list', 'item', 'icon', 'banner', 'menu',
    'dropdown', 'image', 'text', 'title', 'subtitle', 'description', 'link',
    'form', 'input', 'radio', 'checkbox', 'modal', 'overlay', 'popup', 'dialog',
    'tooltip', 'types', 'interfaces', 'props', 'imports', 'component', 'data',
    'left', 'right', 'top', 'bottom', 'middle', 'center', 'desktop', 'mobile',
    'tablet', 'search', 'badge', 'background', 'spacer', 'info', 'illustration',
    'cta', 'stats', 'divider', 'placeholder', 'hero', 'heading', 'body', 'page',
    'table', 'tbody', 'thead', 'tr', 'td', 'th', 'list', 'ul', 'li', 'span', 'div'
];

function isAiComment(text) {
    const clean = text.replace(/[^a-zA-Z ]/g, '').toLowerCase().trim();
    if (clean.length === 0) return true;
    if (clean.length > 100) return false;

    const words = clean.split(/\s+/);

    const hasStructuralWord = words.some(w => structuralWords.includes(w));

    if (words.length <= 4) return true;

    if (hasStructuralWord && words.length <= 15) return true;

    return false;
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const newLines = [];

    for (let line of lines) {
        let skip = false;
        // Handle Windows CRLF
        const cleanLine = line.replace(/\r$/, '');

        const singleLineMatch = cleanLine.match(/^([ \t]*)\/\/(.*)$/);
        if (singleLineMatch) {
            if (isAiComment(singleLineMatch[2])) {
                skip = true;
            }
        }

        const jsxMatch = cleanLine.match(/^([ \t]*)\{\/\*(.*?)\*\/\}[ \t]*$/);
        if (jsxMatch) {
            if (isAiComment(jsxMatch[2])) {
                skip = true;
            }
        }

        const cssMatch = cleanLine.match(/^([ \t]*)\/\*(.*?)\*\/[ \t]*$/);
        if (cssMatch && !cleanLine.includes('eslint')) { // avoid eslint disables
            if (isAiComment(cssMatch[2])) {
                skip = true;
            }
        }

        if (!skip) {
            newLines.push(line);
        }
    }

    const newContent = newLines.join('\n');
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log('Cleaned:', filePath);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
                walk(fullPath);
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

walk(path.join(__dirname, 'src'));
console.log('Cleanup complete!');
