'use strict';

module.exports = {
  rules: {
    /**
     * Stylistic Issues
     */
    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': 'error',
    // Enforce line breaks after each array element
    'array-element-newline': ['error', 'consistent'],
    // Enforce consistent spacing inside single-line blocks
    'block-spacing': 'error',
    // Enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // TODO: Enforce camelcase naming convention
    camelcase: 'off',
    // Enforce capitalization of the first letter of a comment
    'capitalized-comments': 'off',
    // TODO: Require trailing commas
    'comma-dangle': 'off',
    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error', { before: false, after: true }],
    // Enforce consistent comma style
    'comma-style': 'error',
    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'error',
    // Require newline at the end of files
    'eol-last': ['error', 'always'],
    // Disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],
    // Enforce the consistent use of either function declarations or expressions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'multiline'],
    // Enforce minimum and maximum identifier lengths
    'id-length': ['error', { min: 1, max: 64 }],
    // Enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'off',
    // Enforce consistent indentation
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1
      }
    ],
    // Enforce consistent spacing between keys and values in object literals
    'key-spacing': [
      'error',
      {
        // Disallow spaces between the key and the colon
        beforeColon: false,
        // Require at least one space between the colon and the value
        afterColon: true,
        // Enforce exactly one space before or after colons
        mode: 'strict'
      }
    ],
    // Enforce position of line comments
    'line-comment-position': ['error', { position: 'above' }],
    // Enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],
    // Enforce a maximum depth that blocks can be nested
    'max-depth': ['warn', 4],
    // Enforce a maximum line length
    'max-len': ['warn', 100],
    // Enforce a maximum number of line of code in a function
    'max-lines-per-function': ['warn', { max: 100, skipComments: true }],
    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',
    // Enforce a particular style for multiline comments
    'multiline-comment-style': ['error', 'separate-lines'],
    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': ['error', 'always-multiline'],
    // Require constructor names to begin with a capital letter
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    // Require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // Require a newline after each call in a method chain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    // Disallow inline comments after code
    // NOTE: Replacement of `line-comment-position`
    'no-inline-comments': 'off',
    // Disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',
    // Disallow mixed binary operators
    // TODO: Review options
    'no-mixed-operators': 'error',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',
    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // Disallow all tabs
    'no-tabs': 'error',
    // Disallow ternary operators
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', { enforceInMethodNames: true }],
    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],
    // Enforce placing object properties on separate lines
    'object-property-newline': [
      'error',
      {
        // Allow all keys and values to be on the same line
        allowMultiplePropertiesPerLine: true
      }
    ],
    // Allow just one var statement per function
    'one-var': ['error', 'never'],
    // Require a newline around variable declaration
    'one-var-declaration-per-line': ['error', 'always'],
    // Require assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],
    // Enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',
    // Disallow padding within blocks
    'padded-blocks': ['error', 'never'],
    // Require quotes around object literal property names
    'quote-props': ['error', 'as-needed'],
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: [
      'error',
      'single',
      {
        // Allow to use other quotes when the string contains a quote
        avoidEscape: true
      }
    ],
    // Require JSDoc comments
    'require-jsdoc': 'off',
    // Require semicolons instead of ASI
    semi: ['error', 'always'],
    // Enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],
    // Enforce location of semicolons
    'semi-style': ['error', 'last'],
    // Require object keys to be sorted
    'sort-keys': 'off',
    // Enfore consistent spacing before blocks
    'space-before-blocks': 'error',
    // Enforce consistent spacing before `function` definition
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    // Enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],
    // Require spacing around infix operators
    'space-infix-ops': 'error',
    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    // Enforce consistent spacing after or in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+', '*'],
          markers: ['=', '!']
        },
        block: {
          exceptions: ['-', '+', '*'],
          markers: ['=', '!'],
          balanced: true
        }
      }
    ],
    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // Disallow spacing between template tags and their literals
    'template-tag-spacing': 'error'
  }
};
