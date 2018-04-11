module.exports = {
  extends: './rules/eslint',
  rules: {
    /*
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
    // Disallows internal module
    'no-internal-module': true,
    // Disallows the use constant number values outside of variable assignments. When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
    'no-magic-numbers': false,
    // Disallows use of internal modules and namespaces.
    'no-namespace': true,
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
    'promise-function-async': true,
    // Requires type definitions to exist.
    typedef: false,
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
    'unified-signatures': true,

    /*
     * Functionality
     */
    // Warns for an awaited value that is not a Promise.
    'await-promise': true,
    // Disallows the comma operator to be used.
    'ban-comma-operator': true,
    // Bans the use of specific functions or global methods.
    ban: false,
    // Enforces braces for if/for/do/while statements.
    curly: false,
    // Requires a for ... in statement to be filtered with an if statement.
    forin: true,
    // Disallows importing the specified modules directly via import and require. Instead only sub modules may be imported from that module.
    'import-blacklist': false,
    // Only allows labels in sensible locations.
    'label-position': true,
    // Disallows use of arguments.callee.
    'no-arg': true,
    // Disallows bitwise operators.
    'no-bitwise': true,
    // Disallows any type of assignment in conditionals.
    'no-conditional-assignment': true,
    // Bans the use of specified console methods.
    'no-console': {
      options: true,
      severity: 'warning'
    },
    // Disallows access to the constructors of String, Number, and Boolean.
    'no-construct': true,
    // Disallows debugger statements.
    'no-debugger': true,
    // Warns if ‘super()’ appears twice in a constructor.
    'no-duplicate-super': true,
    // Prevents duplicate cases in switch statements.
    'no-duplicate-switch-case': true,
    // Disallows duplicate variable declarations in the same block scope.
    'no-duplicate-variable': [true, 'check-parameters'],
    // Bans usage of the delete operator with computed key expressions.
    'no-dynamic-delete': true,
    // Disallows empty blocks.
    'no-empty': true,
    // Disallows eval function invocations.
    'no-eval': true,
    // Promises returned by functions must be handled appropriately.
    'no-floating-promises': true,
    // Disallows iterating over an array with a for-in loop.
    'no-for-in-array': true,
    // Disallows importing modules that are not listed as dependency in the project’s package.json
    'no-implicit-dependencies': [true, 'dev'],
    // Disallow type inference of {} (empty object type) at function and constructor call sites
    'no-inferred-empty-object-type': true,
    // Warns on use of ${ in non-template strings.
    'no-invalid-template-strings': true,
    // Disallows using the this keyword outside of classes.
    'no-invalid-this': true,
    // Warns on apparent attempts to define constructors for interfaces or new for classes.
    'no-misused-new': true,
    // Disallows use of the null keyword literal.
    'no-null-keyword': false,
    // Forbids an object literal to appear in a type assertion expression. Casting to any is still allowed.
    'no-object-literal-type-assertion': true,
    // Disallows unnecessary return await.
    'no-return-await': true,
    // Disallows shadowing variable declarations.
    'no-shadowed-variable': false,
    // Forbids array literals to contain missing elements.
    'no-sparse-arrays': true,
    // Forbids unnecessary string literal property access. Allows obj["prop-erty"] (can’t be a regular property access). Disallows obj["property"] (should be obj.property).
    'no-string-literal': true,
    // Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
    'no-string-throw': true,
    // Disallows importing any submodule.
    'no-submodule-imports': false,
    // Disallows falling through case statements.
    'no-switch-case-fall-through': true,
    // Disallows unnecessary references to this.
    'no-this-assignment': true,
    // Warns when a method is used as outside of a method call.
    'no-unbound-method': [true, 'ignore-static'],
    // Disallows classes that are not strictly necessary.
    'no-unnecessary-class': true,
    // Warns when using an expression of type ‘any’ in a dynamic way. Uses are only allowed if they would work for {} | null | undefined. Type casts and tests are allowed. Expressions that work on all values (such as "" + x) are allowed.
    'no-unsafe-any': true,
    // Disallows control flow statements, such as return, continue, break and throws in finally blocks.
    'no-unsafe-finally': true,
    // Disallows unused expression statements.
    'no-unused-expression': true,
    // Disallows unused imports, variables, functions and private class members. Similar to tsc’s –noUnusedParameters and –noUnusedLocals options, but does not interrupt code compilation.
    'no-unused-variable': true,
    // Disallows usage of variables before their declaration.
    'no-use-before-declare': true,
    // Disallows usage of the var keyword.
    'no-var-keyword': true,
    // Requires expressions of type void to appear in statement position.
    'no-void-expression': true,
    // Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement.
    'prefer-conditional-expression': true,
    // Enforces the use of the ES2015 object spread operator over Object.assign() where appropriate.
    'prefer-object-spread': {
      options: true,
      severity: 'warning'
    },
    // Requires the radix parameter to be specified when calling parseInt.
    radix: true,
    // When adding two variables, operands must both be of type number or of type string.
    'restrict-plus-operands': true,
    // Restricts the types allowed in boolean expressions. By default only booleans are allowed.
    'strict-boolean-expressions': true,
    // Warns for type predicates that are always true or always false. Works for ‘typeof’ comparisons to constants (e.g. ‘typeof foo === “string”’), and equality comparison to ‘null’/’undefined’. (TypeScript won’t let you compare ‘1 === 2’, but it has an exception for ‘1 === undefined’.) Does not yet work for ‘instanceof’. Does not warn for ‘if (x.y)’ where ‘x.y’ is always truthy. For that, see strict-boolean-expressions.
    'strict-type-predicates': true,
    // Require a default case in all switch statements.
    'switch-default': true,
    // Requires === and !== in place of == and !=.
    'triple-equals': true,
    // Makes sure result of typeof is compared to correct string values
    'typeof-compare': true,
    // Warns if an explicitly specified type argument is the default for that type parameter.
    'use-default-type-parameter': true,
    // Enforces use of the isNaN() function to check for NaN references instead of a comparison to the NaN constant.
    'use-isnan': true,

    /*
     * Maintainability
     */
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
    'object-literal-sort-keys': false,
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
    ],

    /*
     * Style
     */
    // Enforces vertical alignment.
    align: [true, 'parameters', 'arguments', 'statements', 'members', 'elements'],
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
    'match-default-export-name': true,
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
    'no-consecutive-blank-lines': [true, 2],
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
    'ordered-imports': false,
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
    // Prefer return; in void functions and return undefined; in value-returning functions.
    'return-undefined': false,
    // Enforces consistent semicolon usage at the end of every statement.
    // TODO: ignore-interfaces, ignore-bound-class-methods, strict-bound-class-methods
    semicolon: [true, 'always'],
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
