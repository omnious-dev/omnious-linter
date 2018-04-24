module.exports = {
  extends: ['@omnious', './rules/react', './rules/a11y'].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
