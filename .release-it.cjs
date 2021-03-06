module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      header: '# Changelog',
      preset: 'conventionalcommits',
    },
  },
  hooks: {
    'before:init': 'pnpm install && pnpm -w run lint',
    'after:bump': 'pnpm -w run build',
  },
};
