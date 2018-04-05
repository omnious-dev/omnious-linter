module.exports = {
  extends: ['./rules/eslint', './rules/react'],
  rules: {
    /**
     * TypeScript-specific
    */
    // Enforces function overloads to be consecutive.
    'adjacent-overload-signatures': true,
    // Bans specific types from being used. Does not ban the corresponding runtime objects from being used.
    'ban-types': false,
    // Requires explicit visibility declarations for class members.
    'member-access': [true, 'check-accessor', 'check-constructor', 'check-parameter-property'],
    // Enforces member ordering.
    'member-ordering': false,
    // Disallows usages of any as a type declaration.
    'no-any': {
      options: true,
      severity: 'warning'
    },
    // Forbids empty interfaces.
    'no-empty-interface': true,
    // Avoid import statements with side-effect.
    'no-import-side-effect': false,
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    'no-inferrable-types': {
      options: true,
      severity: 'warning'
    },
    // Disallows the use constant number values outside of variable assignments. When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
    'no-magic-numbers': false,
    // Lint rules encode logic for syntactic & semantic checks of TypeScript source code.
    'only-arrow-functions': [
      true,
      'allow-declarations',
      'allow-named-functions'
    ],
    // Requires type definitions to exist.
    'typedef': false,
    // Requires or disallows whitespace for type definitions.
    'typedef-whitespace': [true, {
      'call-signature': 'nospace',
      'index-signature': 'nospace',
      'parameter': 'nospace',
      'property-declaration': 'nospace',
      'variable-declaration': 'nospace'
    }, {
      'call-signature': 'onespace',
      'index-signature': 'onespace',
      'parameter': 'onespace',
      'property-declaration': 'onespace',
      'variable-declaration': 'onespace'
    }],

    /**
     * Functionality
    */
    // Enforces braces for if/for/do/while statements.
    'curly': [true, 'as-needed'],
    // Bans the use of specified console methods.
    'no-console': false,
    // Disallows importing modules that are not listed as dependency in the project’s package.json
    'no-implicit-dependencies': [true, 'dev'],
    // Disallows use of the null keyword literal.
    'no-null-keyword': false,
    // Disallows importing any submodule.
    'no-submodule-imports': false,
    // Disallows unused imports, variables, functions and private class members. Similar to tsc’s –noUnusedParameters and –noUnusedLocals options, but does not interrupt code compilation.
    'no-unused-variable': true,

    /**
     * Maintainability
    */
    // Disallows default exports in ES6-style modules.
    'no-default-export': false,
    // Disallows invocation of require().
    'no-require-imports': true,
    // Checks ordering of keys in object literals.
    'object-literal-sort-keys': false,
    // Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters.
    'trailing-comma': [true, {
      multiline: 'never',
      singleline: 'never'
    }],

    /**
     * Style
    */
    // Enforces vertical alignment.
    'align': [true, 'parameters', 'arguments', 'statements', 'members', 'elements'],
    // Requires using either ‘T[]’ or ‘Array' for arrays.
    'array-type': [true, 'generic'],
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
    // TODO:
    'completed-docs': false,
    // Enforces UTF-8 file encoding.
    'encoding': true,
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
    // Requires that chained method calls be broken apart onto separate lines.
    'newline-per-chained-call': false,
    // Disallows one or more blank lines in a row.
    'no-consecutive-blank-lines': [true, 2],
    // Requires that import statements be alphabetized and grouped.
    'ordered-imports': false,
    // Warns for class methods that do not use ‘this’.
    'prefer-function-over-method': true,
    // Requires single or double quotes for string literals.
    'quotemark': [
      true,
      'single',
      'jsx-double',
      'avoid-template',
      'avoid-escape'
    ],
    // Enforces consistent semicolon usage at the end of every statement.
    // TODO: ignore-interfaces, ignore-bound-class-methods, strict-bound-class-methods
    'semicolon': [true, 'always'],
    // Require or disallow a space before function parenthesis
    'space-before-function-paren': [true, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
      method: 'never',
      constructor: 'always'
    }],
    // Checks variable names for various errors.
    'variable-name': [
      true,
      'check-format',
      'allow-pascal-case',
      'ban-keywords'
    ],
    // Enforces whitespace style conventions.
    'whitespace': [
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
}
