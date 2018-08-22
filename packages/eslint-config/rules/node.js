'use strict';

module.exports = {
  rules: {
    // Disallow `new` operators with calls to `require`
    'no-new-require': 'error',
    // Disallow string concatenation with `__dirname` and `__filename`
    'no-path-concat': 'error',
    // Disallow the use of process.env
    'no-process-env': 'off'
  }
};
