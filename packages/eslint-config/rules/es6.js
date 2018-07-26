'use strict';

module.exports = {
  rules: {
    /**
     * ECMAScript 6
     */
    // Require parens in arrow function arguments
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    // Enforce spacing around the * in generator functions
    'generator-star-spacing': ['error', { before: false, after: true }],
    // Require let or const instead of var
    'no-var': 'error',
    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['error', 'never'],
    // Enforce sorted import declarations within modules
    'sort-imports': 'off'
  }
};
