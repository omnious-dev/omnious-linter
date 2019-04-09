'use strict';

module.exports = {
  extends: [
    './rules/bestPractices',
    './rules/ecmaScript6',
    './rules/nodejs-and-commonjs',
    './rules/possibleErrors',
    './rules/strictMode',
    './rules/stylisticIssues',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    es6: true,
    node: true
  }
};
