'use strict';

module.exports = {
  rules: {
    // Warns for an awaited value that is not a Promise.
    'await-promise': [true],
    // Disallows the comma operator to be used.
    'ban-comma-operator': true,
    // Bans the use of specific functions or global methods.
    ban: [false],
    // Enforces braces for if/for/do/while statements.
    curly: [true],
    // Requires a for ... in statement to be filtered with an if statement.
    forin: true,
    // Disallows importing the specified modules directly via import and require.
    'import-blacklist': [false],
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
      options: ['log', 'error'],
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
    'no-empty': [true],
    // Disallows eval function invocations.
    'no-eval': true,
    // Promises returned by functions must be handled appropriately.
    'no-floating-promises': [false],
    // Disallows iterating over an array with a for-in loop.
    'no-for-in-array': true,
    // Disallows importing modules that are not listed as dependency in the project’s package.json
    'no-implicit-dependencies': [true, 'dev'],
    // Disallow type inference of {} (empty object type) at function and constructor call sites
    'no-inferred-empty-object-type': true,
    // Warns on use of ${ in non-template strings.
    'no-invalid-template-strings': true,
    // Disallows using the this keyword outside of classes.
    'no-invalid-this': false,
    // Warns on apparent attempts to define constructors for interfaces or new for classes.
    'no-misused-new': true,
    // Disallows use of the null keyword literal.
    'no-null-keyword': false,
    // Forbids an object literal to appear in a type assertion expression.
    'no-object-literal-type-assertion': true,
    // Disallows unnecessary return await.
    'no-return-await': true,
    // Disallows shadowing variable declarations.
    'no-shadowed-variable': [false],
    // Forbids array literals to contain missing elements.
    'no-sparse-arrays': true,
    // Forbids unnecessary string literal property access.
    'no-string-literal': true,
    // Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
    'no-string-throw': true,
    // Disallows importing any submodule.
    'no-submodule-imports': false,
    // Disallows falling through case statements.
    'no-switch-case-fall-through': true,
    // Disallows unnecessary references to this.
    'no-this-assignment': [true],
    // Warns when a method is used as outside of a method call.
    'no-unbound-method': [true, 'ignore-static'],
    // Disallows classes that are not strictly necessary.
    'no-unnecessary-class': [true, 'allow-empty-class'],
    // Warns when using an expression of type ‘any’ in a dynamic way.
    'no-unsafe-any': {
      severity: 'warning'
    },
    // Disallows control flow statements, such as return, continue, break and throws in finally blocks.
    'no-unsafe-finally': true,
    // Disallows unused expression statements.
    'no-unused-expression': [true],
    // Disallows unused imports, variables, functions and private class members.
    'no-unused-variable': [true],
    // Disallows usage of variables before their declaration.
    'no-use-before-declare': true,
    // Disallows usage of the var keyword.
    'no-var-keyword': true,
    // Requires expressions of type void to appear in statement position.
    'no-void-expression': [true],
    // Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement.
    'prefer-conditional-expression': [true],
    // Enforces the use of the ES2015 object spread operator over Object.assign() where appropriate.
    'prefer-object-spread': {
      severity: 'warning'
    },
    // Requires the radix parameter to be specified when calling parseInt.
    radix: true,
    // When adding two variables, operands must both be of type number or of type string.
    'restrict-plus-operands': true,
    // Restricts the types allowed in boolean expressions.
    'strict-boolean-expressions': [false],
    // Warns for type predicates that are always true or always false.
    'strict-type-predicates': false,
    // Require a default case in all switch statements.
    'switch-default': true,
    // Requires === and !== in place of == and !=.
    'triple-equals': true,
    // NOTE: deprecated
    // Makes sure result of typeof is compared to correct string values
    // 'typeof-compare': true,
    // FIXME: has error
    // Warns if an explicitly specified type argument is the default for that type parameter.
    // 'use-default-type-parameter': true,
    // Enforces use of the isNaN() function to check for NaN references instead of a comparison to the NaN constant.
    'use-isnan': true
  }
};
