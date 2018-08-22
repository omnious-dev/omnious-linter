'use strict';

module.exports = {
  rules: {
    // Enforces a threshold of cyclomatic complexity.
    'cyclomatic-complexity': true,
    // Warns when deprecated APIs are used.
    deprecation: true,
    // Ensures the file ends with a newline.
    eofline: true,
    // Enforces indentation with tabs or spaces.
    indent: [true, 'spaces', 2],
    // Enforces a consistent linebreak style.
    'linebreak-style': [true, 'LF'],
    // A file may not contain more than the specified number of classes
    'max-classes-per-file': false,
    // Requires files to remain under a certain number of lines
    'max-file-line-count': {
      options: 300,
      severity: 'warning'
    },
    // Requires lines to be under a certain max length.
    'max-line-length': false,
    // Disallows default exports in ES6-style modules.
    'no-default-export': false,
    // Disallows multiple import statements from the same module.
    'no-duplicate-imports': false,
    // Disallows mergeable namespaces in the same file.
    'no-mergeable-namespace': true,
    // Disallows invocation of require().
    'no-require-imports': true,
    // Checks ordering of keys in object literals.
    'object-literal-sort-keys': {
      severity: 'warning'
    },
    // Requires that variable declarations use const instead of let and var if possible.
    'prefer-const': true,
    // Requires that private variables are marked as readonly if they’re never modified outside of the constructor.
    'prefer-readonly': true,
    // Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters.
    'trailing-comma': [
      true,
      {
        multiline: 'never',
        singleline: 'never'
      }
    ]
  }
};
