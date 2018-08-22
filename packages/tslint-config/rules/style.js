'use strict';

module.exports = {
  rules: {
    // Enforces vertical alignment.
    align: [true, 'parameters', 'arguments', 'statements', 'members', 'elements'],
    // Requires using either ‘T[]’ or ‘Array' for arrays.
    'array-type': [true, 'array-simple'],
    // Requires parentheses around the parameters of arrow function definitions.
    'arrow-parens': [true, 'ban-single-arg-parens'],
    // Suggests to convert() => { return x; } to () => x.
    'arrow-return-shorthand': [true, 'multiline'],
    // In a binary expression, a literal should always be on the right-hand side if possible. For example, prefer ‘x + 1’ over ‘1 + x’.
    'binary-expression-operand-order': true,
    // An interface or literal type with just a call signature can be written as a function type.
    'callable-types': true,
    // Enforces PascalCased class and interface names.
    'class-name': true,
    // Enforces formatting rules for single-line comments.
    'comment-format': [true, 'check-space'],
    // Enforces documentation for important items be filled out.
    'completed-docs': false,
    // Enforces UTF-8 file encoding.
    encoding: true,
    // Enforces a certain header comment for all files, matched by a regular expression.
    'file-header': false,
    // Ensures proper spacing between import statement keywords
    'import-spacing': true,
    // Requires interface names to begin with a capital ‘I’
    'interface-name': false,
    // Prefer an interface declaration over a type literal (type T = { ... })
    'interface-over-type-literal': true,
    // Enforces basic format rules for JSDoc comments.
    'jsdoc-format': [true, 'check-multiline-start'],
    // Requires that a default import have the same name as the declaration it imports. Does nothing for anonymous default exports.
    'match-default-export-name': false,
    // Enforces blank line before return when not the only line in the block.
    'newline-before-return': true,
    // Requires that chained method calls be broken apart onto separate lines.
    'newline-per-chained-call': false,
    // Requires parentheses when invoking a constructor via the new keyword.
    'new-parens': true,
    // Requires the use of as Type for type assertions instead of <Type>.
    'no-angle-bracket-type-assertion': true,
    // Warns on comparison to a boolean literal, as in x === true.
    'no-boolean-literal-compare': true,
    // Disallows one or more blank lines in a row.
    'no-consecutive-blank-lines': true,
    // Disallow irregular whitespace within a file, including strings and comments.
    'no-irregular-whitespace': true,
    // Disallows parameter properties in class constructors.
    'no-parameter-properties': true,
    // Forbids JSDoc which duplicates TypeScript functionality.
    'no-redundant-jsdoc': true,
    // Don’t <reference types="foo" /> if you import foo anyway.
    'no-reference-import': true,
    // Disallows trailing whitespace at the end of a line.
    'no-trailing-whitespace': true,
    // Replaces x => f(x) with just f. To catch more cases, enable only-arrow-functions and arrow-return-shorthand too.
    'no-unnecessary-callback-wrapper': true,
    // Forbids a ‘var’/’let’ statement or destructuring initializer to be initialized to ‘undefined’.
    'no-unnecessary-initializer': true,
    // Warns when a namespace qualifier (A.x) is unnecessary.
    'no-unnecessary-qualifier': true,
    // Checks that decimal literals should begin with ‘0.’ instead of just ‘.’, and should not end with a trailing ‘0’.
    'number-literal-format': true,
    // Enforces consistent object literal property quote style.
    'object-literal-key-quotes': [true, 'consistent-as-needed'],
    // Enforces/disallows use of ES6 object literal shorthand.
    'object-literal-shorthand': true,
    // Requires the specified tokens to be on the same line as the expression preceding them.
    'one-line': true,
    // Disallows multiple variable definitions in the same declaration statement.
    'one-variable-per-declaration': true,
    // Requires that import statements be alphabetized and grouped.
    'ordered-imports': {
      options: {
        'grouped-imports': false,
        'import-sources-order': 'lowercase-first',
        'named-imports-order': 'case-insensitive',
        'module-source-path': 'full'
      },
      severity: 'warning'
    },
    // Warns for class methods that do not use ‘this’.
    'prefer-function-over-method': [true, 'allow-public'],
    // Prefer foo(): void over foo: () => void in interfaces and types.
    'prefer-method-signature': true,
    // Prefer a switch statement to an if statement with simple === comparisons.
    'prefer-switch': [
      true,
      {
        'min-cases': 3
      }
    ],
    // Prefer a template expression over string literal concatenation.
    'prefer-template': true,
    // Requires single or double quotes for string literals.
    quotemark: [true, 'single', 'jsx-double', 'avoid-template', 'avoid-escape'],
    // // Prefer return; in void functions and return undefined; in value-returning functions.
    // 'return-undefined': false,
    // Enforces consistent semicolon usage at the end of every statement.
    semicolon: [true, 'always', 'ignore-bound-class-methods'],
    // Require or disallow a space before function parenthesis
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
        method: 'never',
        constructor: 'always'
      }
    ],
    // Enforces spaces within parentheses or disallow them. Empty parentheses () are always allowed.
    'space-within-parens': true,
    // Checks whether the final clause of a switch statement ends in break;.
    'switch-final-break': true,
    // Checks that type literal members are separated by semicolons. Enforces a trailing semicolon for multiline type literals.
    'type-literal-delimiter': true,
    // Checks variable names for various errors.
    'variable-name': [true, 'check-format', 'allow-pascal-case', 'ban-keywords'],
    // Enforces whitespace style conventions.
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-separator',
      'check-rest-spread',
      'check-type',
      'check-typecast',
      'check-type-operator',
      'check-preblock'
    ]
  }
};
