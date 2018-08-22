'use strict';

module.exports = {
  rules: {
    // Disallow `catch` clause parameters from shadowing variables
    'no-catch-shadow': 'error',
    // Disallow deleting variables
    'no-delete-var': 'error',
    // Disallow labels that share a name with a variable
    'no-label-var': 'error',
    // Disallow the use of undeclared variables
    'no-undef': 'error',
    // Disallow initializing variables to `undefined`
    'no-undef-init': 'error',
    // Disallow the use of `undefined` as an identifier
    'no-undefined': 'error',
    // Disallow Unused Variables
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        caughtErrors: 'all'
      }
    ]
  }
};
