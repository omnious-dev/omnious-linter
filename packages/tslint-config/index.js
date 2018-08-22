'use strict';

module.exports = {
  rulesDirectory: [
    './rules/typescript',
    './rules/functionality',
    './rules/maintainability',
    './rules/style',
    './rules/eslint',
    './rules/microsoft',
    './rules/test'
  ].map(require.resolve)
};
