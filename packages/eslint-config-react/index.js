module.exports = {
  extends: ['@omnious', './rules/react', './rules/a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
