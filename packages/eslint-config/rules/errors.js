'use strict';

module.exports = {
  rules: {
    /**
     * Possible Errors
     */
    // Disallow infinite `for` loop
    'for-direction': 'error',
    // Enforce a return statement is present in getters
    'getter-return': ['error', { allowImplicit: true }],
    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',
    // Disallow assignments in test conditions except in parentheses
    'no-cond-assign': 'error',
    // Disallow the use of console
    'no-console': 'warn',
    // Disallow constant expressions in conditions
    'no-constant-condition': 'error',
    // Disallow control characters in regular expressions
    'no-control-regex': 'error',
    // Disallow the use of debugger
    'no-debugger': 'error',
    // Disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',
    // Disallow duplicate keys in object literals
    'no-dupe-keys': 'error',
    // Disallow duplicate cases in case statements
    'no-duplicate-case': 'error',
    // Disallow empty block statements
    'no-empty': 'error',
    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',
    // Disallow unnecessary parentheses
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
    // Disallow unreachable code
    'no-unreachable': 'error',
    // TODO: Research later
    // Enforce JSDoc comment style
    'valid-jsdoc': 'off',
    // Enforce comparing `typeof` expressions against valid strings
    'valid-typeof': 'error'
  }
};
