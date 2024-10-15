export function defaultTemplate() {
  return `{{description}}
  
\`\`\`bash
npm install {{{name}}}
\`\`\`
  
by {{{author}}}`;
}