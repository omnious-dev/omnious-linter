'use strict';

module.exports = {
  extends: [
    './rules/errors',
    './rules/best',
    './rules/strict',
    './rules/variables',
    './rules/node',
    './rules/stylistic',
    './rules/es6'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    es6: true,
    node: true
  }
};
