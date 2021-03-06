module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}': 'eslint --fix',
  '*.css': 'stylelint --fix',
};
