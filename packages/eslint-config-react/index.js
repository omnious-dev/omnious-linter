module.exports = {
  extends: ['@omnious/eslint-config', './rules/react', './rules/a11y'].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
