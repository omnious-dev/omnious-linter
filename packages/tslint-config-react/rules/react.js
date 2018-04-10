module.exports = {
  extends: 'tslint-react',
  rules: {
    // Enforces a consistent style for multiline JSX elements which promotes ease of editing via line-wise manipulations as well as maintainabilty via small diffs when changes are made.
    'jsx-alignment': true,
    // Allows blacklisting of JSX elements with an optional explanatory message in the reported failure.
    'jsx-ban-elements': true,
    // Allows blacklisting of props in JSX with an optional explanatory message in the reported failure.
    'jsx-ban-props': true,
    // When using a boolean attribute in JSX, you can set the attribute value to true or omit the value. This rule will enforce one or the other to keep consistency in your code.
    'jsx-boolean-value': [true, 'never'],
    // Requires or bans spaces between curly brace characters in JSX.
    'jsx-curly-spacing': [true, 'always'],
    // Requires or bans spaces before and after the = token in JSX element attributes.
    'jsx-equals-spacing': [true, 'never'],
    // Warns for missing key props in JSX element array literals and inside return statements of Array.prototype.map callbacks.
    'jsx-key': [true, {
      severity: 'warning'
    }],
    /*
      Forbids function binding in JSX attributes. This has the same intent as jsx-no-lambda in helping you avoid excessive re-rendres.
      Note that this currently only does a simple syntactic check, not a semantic one (it doesn't use the type checker). So it may have some rare false positives if you define your own .bind function and supply this as a parameter.
     */
    'jsx-no-bind': false,
    // Creating new anonymous functions (with either the function syntax or ES2015 arrow syntax) inside the render call stack works against pure component rendering. When doing an equality check between two lambdas, React will always consider them unequal values and force the component to re-render more often than necessary.
    'jsx-no-lambda': false,
    // Disallows multiline JS expressions inside JSX blocks to promote readability
    'jsx-no-multiline-js': false,
    // Passing strings to the ref prop of React elements is considered a legacy feature and will soon be deprecated. Instead, use a callback.
    'jsx-no-string-ref': true,
    // Enforces use of a translation function. Plain string literals are disallowed in JSX when enabled.
    'jsx-use-translation-function': true,
    // Enforces that JSX elements with no children are self-closing.
    'jsx-self-close': true,
    /*
      Enforces that multiline JSX expressions are wrapped with parentheses.
      Opening parenthesis must be followed by a newline.
      Closing parenthesis must be preceded by a newline.
     */
    'jsx-wrap-multiline': true
  }
}
