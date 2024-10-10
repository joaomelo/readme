export function defaultTemplate() {
  return `{{{name}}}

{{description}}
  
\`\`\`bash
npm install {{{name}}}
\`\`\`
  
by {{{author}}}`;
}