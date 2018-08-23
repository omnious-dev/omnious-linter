'use strict';

module.exports = {
  rules: {
    // Enforces function overloads to be consecutive.
    'adjacent-overload-signatures': true,
    // Bans specific types from being used. Does not ban the corresponding runtime objects from being used.
    'ban-types': [false],
    // Requires explicit visibility declarations for class members.
    'member-access': [true, 'check-accessor', 'check-constructor', 'check-parameter-property'],
    // Enforces member ordering.
    'member-ordering': [
      true,
      {
        order: 'fields-first'
      }
    ],
    // Disallows usages of any as a type declaration.
    'no-any': {
      severity: 'warning'
    },
    // Forbids empty interfaces.
    'no-empty-interface': {
      severity: 'warning'
    },
    // Avoid import statements with side-effect.
    'no-import-side-effect': [false],
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    'no-inferrable-types': false,
    // Disallows internal module
    'no-internal-module': true,
    // Disallows the use constant number values outside of variable assignments.
    'no-magic-numbers': [true],
    // Disallows use of internal modules and namespaces.
    'no-namespace': [true],
    // Disallows non-null assertions using the ! postfix operator.
    'no-non-null-assertion': true,
    // Disallows reassigning parameters.
    'no-parameter-reassignment': true,
    // Disallows /// <reference path=> imports (use ES6-style imports instead).
    'no-reference': true,
    // Warns if a type assertion does not change the type of an expression.
    'no-unnecessary-type-assertion': true,
    // Disallows the use of require statements except in import statements.
    'no-var-requires': true,
    // Lint rules encode logic for syntactic & semantic checks of TypeScript source code.
    'only-arrow-functions': [true, 'allow-declarations', 'allow-named-functions'],
    // Recommends a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
    'prefer-for-of': true,
    // Requires any function or method that returns a promise to be marked async.
    'promise-function-async': [true],
    // Requires type definitions to exist.
    typedef: [
      true,
      'call-signature',
      'arrow-call-signature',
      'parameter',
      'arrow-parameter',
      'property-declaration',
      'variable-declaration',
      'member-variable-declaration',
      'object-destructuring',
      'array-destructuring'
    ],
    // Requires or disallows whitespace for type definitions.
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        parameter: 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace'
      }
    ],
    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
    'unified-signatures': true
  }
};
