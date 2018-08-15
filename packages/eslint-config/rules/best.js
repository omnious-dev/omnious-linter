'use strict';

module.exports = {
  rules: {
    /**
     * Best Practices
     */
    // Enforce consistent brace style for all control statements
    curly: ['error', 'all'],
    // Require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // Disallow magic numbers
    'no-magic-numbers': 'off',
    // Disallow specified warning terms in comments
    'no-warning-comments': 'off'
  }
};
