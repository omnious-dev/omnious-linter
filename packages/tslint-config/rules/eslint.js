'use strict';

module.exports = {
  rulesDirectory: 'tslint-eslint-rules',
  rules: {
    /**
     * Possible Errors
     */
    // Disallow constant expressions in conditions
    'no-constant-condition': [true, { checkLoops: false }],
    // Disallow control characters in regular expressions
    'no-control-regex': true,
    // Disallow duplicate cases in case statements
    'no-duplicate-case': true,
    // Disallow empty character classes in regular expressions
    'no-empty-character-class': true,
    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': true,
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': true,
    // Disallow unnecessary semicolons
    'no-extra-semi': true,
    // Disallow function or variable declarations in nested blocks
    'no-inner-declarations': true,
    // Disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': true,
    // NOTE: deprecated
    // 'ter-no-irregular-whitespace': true,
    // Disallow multiple spaces in a regular expression literal
    'no-regex-spaces': true,
    // NOTE: deprecated
    // 'ter-no-sparse-arrays': true,
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': true,
    // Enforce valid JSDoc comments
    'valid-jsdoc': true,
    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': true,

    /**
     * Best Practices
     */
    // Disallow use of multiple spaces
    'no-multi-spaces': true,
    // FIXME: not added yet
    // Disallow the use of __proto__ property
    // 'ter-no-proto': true,
    // Disallow use of javascript: urls.
    // 'ter-no-script-url': true,
    // Disallow comparisons where both sides are exactly the same
    // 'ter-no-self-compare': true,

    /**
     * Node.js and CommonJS
     */
    // Enforce error handling in callbacks
    'handle-callback-err': true,

    /**
     * Stylistic Issues
     */
    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': [true, 'never'],
    // Enforce consistent spacing inside single-line blocks
    'block-spacing': true,
    // Enforce consistent brace style for blocks
    'brace-style': [true, '1tbs', { allowSingleLine: true }],
    // Enforce consistent spacing inside computed property brackets
    'ter-computed-property-spacing': true,
    // Disallow spacing between function identifiers and their invocations
    'ter-func-call-spacing': [true, 'never'],
    // Enforce consistent indentation
    'ter-indent': [
      true,
      2,
      { SwitchCase: 1, ArrayExpression: 1, ObjectExpression: 1, ImportDeclaration: 1 }
    ],
    // Enforce a maximum line length
    'ter-max-len': false,
    // Require or disallow an empty newline after variable declarations
    'ter-newline-after-var': false,
    // Disallow mixed spaces and tabs for indentation
    'ter-no-mixed-spaces-and-tabs': true,
    // Enforce consistent spacing inside braces
    'object-curly-spacing': [true, 'always'],
    // Disallow padding within blocks
    'ter-padded-blocks': false,
    // NOTE: replaced with `[tslint] ordered-imports`
    // 'sort-imports': true,
    // Require or disallow spaces inside parentheses
    'space-in-parens': [true, 'never'],
    // Disallow all tabs
    'ter-no-tabs': true
  }
};
