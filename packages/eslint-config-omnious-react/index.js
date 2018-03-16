module.exports = {
  extends: [
    'eslint-config-omnious',
    './rules/import',
    './rules/react',
    './rules/react-a11y'
  ].map(require.resolve),
  rules: {}
}
