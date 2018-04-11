module.exports = {
  extends: ['./rules/bem', './rules/browser', './rules/scss'],
  rules: {
    /*
     * Possible errors
     */
    // Disallow invalid hex colors.
    'color-no-invalid-hex': true,
    // Disallow duplicate font family names.
    'font-family-no-duplicate-names': true,
    // Disallow missing generic families in lists of font family names.
    'font-family-no-missing-generic-family-keyword': true,
    // Disallow an unspaced operator within calc functions.
    'function-calc-no-unspaced-operator': true,
    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    'function-linear-gradient-no-nonstandard-direction': true,
    // Disallow (unescaped) newlines in strings.
    'string-no-newline': true,
    // Disallow unknown units.
    'unit-no-unknown': true,
    // Disallow unknown properties.
    'property-no-unknown': true,
    // Disallow !important within keyframe declarations.
    'keyframe-declaration-no-important': true,
    // Disallow duplicate properties within declaration blocks.
    'declaration-block-no-duplicate-properties': true,
    // Disallow shorthand properties that override related longhand properties.
    'declaration-block-no-shorthand-property-overrides': true,
    // Disallow empty blocks.
    'block-no-empty': [true, { severity: 'warning' }],
    // Disallow unknown pseudo-class selectors.
    'selector-pseudo-class-no-unknown': true,
    // Disallow unknown pseudo-element selectors.
    'selector-pseudo-element-no-unknown': true,
    // Disallow unknown type selectors.
    'selector-type-no-unknown': true,
    // Disallow unknown media feature names.
    'media-feature-name-no-unknown': true,
    // Disallow unknown at-rules.
    'at-rule-no-unknown': true,
    // Disallow empty comments.
    'comment-no-empty': true,
    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    'no-descending-specificity': true,
    // Disallow duplicate @import rules within a stylesheet.
    'no-duplicate-at-import-rules': true,
    // Disallow duplicate selectors within a stylesheet.
    'no-duplicate-selectors': true,
    // Disallow empty sources.
    'no-empty-source': [true, { severity: 'warning' }],
    // Disallow extra semicolons.
    'no-extra-semicolons': true,
    // Disallow double-slash comments (//...) which are not supported by CSS and could lead to unexpected results.
    'no-invalid-double-slash-comments': [true, { severity: 'warning' }],

    /*
     * Limit language features
     */
    // Require (where possible) or disallow named colors.
    'color-named': 'never',
    // Disallow hex colors.
    'color-no-hex': null,
    // Specify a blacklist of disallowed functions.
    'function-blacklist': null,
    // Disallow scheme-relative urls.
    'function-url-no-scheme-relative': true,
    // Specify a blacklist of disallowed URL schemes.
    'function-url-scheme-blacklist': null,
    // Specify a whitelist of allowed URL schemes.
    'function-url-scheme-whitelist': null,
    // Specify a whitelist of allowed functions
    'function-whitelist': null,
    // Limit the number of decimal places allowed in numbers.
    'number-max-precision': 3,
    // Specify the minimum number of milliseconds for time values.
    'time-min-milliseconds': 10,
    // Specify a blacklist of disallowed units.
    'unit-blacklist': [['em', 'pt'], { severity: 'warning' }],
    // Specify a whitelist of allowed units.
    'unit-whitelist': null,
    // Disallow redundant values in shorthand properties.
    'shorthand-property-no-redundant-values': true,
    // Disallow vendor prefixes for values.
    'value-no-vendor-prefix': true,
    // Specify a pattern for custom properties.
    'custom-property-pattern': null,
    // Specify a blacklist of disallowed properties.
    'property-blacklist': null,
    // TODO: Do I have to throw error?
    // Disallow vendor prefixes for properties.
    'property-no-vendor-prefix': true,
    // Specify a whitelist of allowed properties.
    'property-whitelist': null,
    // Disallow longhand properties that can be combined into one shorthand property.
    'declaration-block-no-redundant-longhand-properties': true,
    // Disallow !important within declarations.
    'declaration-no-important': true,
    // Specify a blacklist of disallowed property and unit pairs within declarations.
    'declaration-property-unit-blacklist': null,
    // Specify a whitelist of allowed property and unit pairs within declarations.
    'declaration-property-unit-whitelist': null,
    // Specify a blacklist of disallowed property and value pairs within declarations.
    'declaration-property-value-blacklist': null,
    // Specify a whitelist of allowed property and value pairs within declarations.
    'declaration-property-value-whitelist': null,
    // Limit the number of declaration within a single line declaration block.
    'declaration-block-single-line-max-declarations': 1,
    // Specify a blacklist of disallowed attribute operators.
    'selector-attribute-operator-blacklist': null,
    // Specify a whitelist of allowed attribute operators.
    'selector-attribute-operator-whitelist': null,
    // Specify a pattern for class selectors.
    'selector-class-pattern': null,
    // Specify a blacklist of disallowed combinators.
    'selector-combinator-blacklist': null,
    // Specify a whitelist of allowed combinators.
    'selector-combinator-whitelist': null,
    // Specify a pattern for id selectors.
    'selector-id-pattern': null,
    // Limit the number of attribute selectors in a selector.
    'selector-max-attribute': [2, { severity: 'warnings' }],
    // Limit the number of classes in a selector.
    'selector-max-class': 2,
    // Limit the number of combinators in a selector.
    'selector-max-combinators': 2,
    // Limit the number of compound selectors in a selector.
    'selector-max-compound-selectors': 2,
    // Limit the number of adjacent empty lines within selectors.
    'selector-max-empty-lines': 0,
    // Limit the number of id selectors in a selector.
    'selector-max-id': 1,
    // Limit the specificity of selectors.
    'selector-max-specificity': null,
    // Limit the number of type selectors in a selector.
    'selector-max-type': 2,
    // Limit the number of universal selectors in a selector.
    'selector-max-universal': 1,
    // Specify a pattern for the selectors of rules nested within rules.
    'selector-nested-pattern': '^&',
    // Disallow qualifying a selector by type.
    'selector-no-qualifying-type': true,
    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': true,
    // Specify a blacklist of disallowed pseudo-class selectors.
    'selector-pseudo-class-blacklist': null,
    // Specify a whitelist of allowed pseudo-class selectors.
    'selector-pseudo-class-whitelist': null,
    // Specify a blacklist of disallowed pseudo-element selectors.
    'selector-pseudo-element-blacklist': null,
    // Specify a whitelist of allowed pseudo-element selectors.
    'selector-pseudo-element-whitelist': null,
    // Specify a blacklist of disallowed media feature names.
    'media-feature-name-blacklist': null,
    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': true,
    // Specify a whitelist of allowed media feature names.
    'media-feature-name-whitelist': null,
    // Specify a pattern for custom media query names.
    'custom-media-pattern': null,
    // Specify a blacklist of disallowed at-rules.
    'at-rule-blacklist': null,
    // Disallow vendor prefixes for at-rules.
    'at-rule-no-vendor-prefix': true,
    // Specify a whitelist of allowed at-rules.
    'at-rule-whitelist': null,
    // Specify a blacklist of disallowed words within comments.
    'comment-word-blacklist': null,
    // Limit the allowed nesting depth.
    'max-nesting-depth': [2, { ignore: 'blockless-at-rules' }],
    // Disallow unknown animations.
    'no-unknown-animations': true,

    /*
     * Stylistic issues
     */
    // Specify lowercase or uppercase for hex colors.
    'color-hex-case': 'lower',
    // Specify short or long notation for hex colors.
    'color-hex-length': 'short',
    // Specify whether or not quotation marks should be used around font family names.
    'font-family-name-quotes': 'always-unless-keyword',
    // Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.
    'font-weight-notation': 'numeric',
    // Require a newline or disallow whitespace before the commas of functions.
    'function-comma-newline-after': 'always',
    // Require a newline or disallow whitespace before the commas of functions.
    'function-comma-newline-before': 'always',
    // Require a single space or disallow whitespace after the commas of functions.
    'function-comma-space-after': 'always',
    // Require a single space or disallow whitespace before the commas of functions.
    'function-comma-space-before': 'never',
    // Limit the number of adjacent empty lines within functions.
    'function-max-empty-lines': 0,
    // Specify lowercase or uppercase for function names.
    'function-name-case': 'lower',
    // Require a newline or disallow whitespace on the inside of the parentheses of functions.
    'function-parentheses-newline-inside': 'always-multi-line',
    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    'function-parentheses-space-inside': 'never',
    // Require or disallow quotes for urls.
    'function-url-quotes': 'always',
    // Require or disallow whitespace after functions.
    'function-whitespace-after': 'always',
    // Require or disallow a leading zero for fractional numbers less than 1.
    'number-leading-zero': 'always',
    // Disallow trailing zeros in numbers.
    'number-no-trailing-zeros': true,
    // Specify single or double quotes around strings.
    'string-quotes': 'single',
    // Disallow units for zero lengths.
    'length-zero-no-unit': true,
    // Specify lowercase or uppercase for units.
    'unit-case': 'lower',
    // Specify lowercase or uppercase for keywords values.
    'value-keyword-case': 'lower',
    // Require a newline or disallow whitespace after the commas of value lists.
    'value-list-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of value lists.
    'value-list-comma-newline-before': 'always-multi-line',
    // Require a single space or disallow whitespace after the commas of value lists.
    'value-list-comma-space-after': 'always',
    // Require a single space or disallow whitespace before the commas of value lists.
    'value-list-comma-space-before': 'never',
    // Limit the number of adjacent empty lines within value lists.
    'value-list-max-empty-lines': 0,
    // Require or disallow an empty line before custom properties.
    'custom-property-empty-line-before': 'never',
    // Specify lowercase or uppercase for properties.
    'property-case': 'lower',
    // Require a single space or disallow whitespace after the bang of declarations.
    'declaration-bang-space-after': 'never',
    // Require a single space or disallow whitespace before the bang of declarations.
    'declaration-bang-space-before': 'always',
    // Require a newline or disallow whitespace after the colon of declarations.
    'declaration-colon-newline-after': 'always-multi-line',
    // Require a single space or disallow whitespace after the colon of declarations.
    'declaration-colon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the colon of declarations.
    'declaration-colon-space-before': 'never',
    // Require or disallow an empty line before declarations.
    'declaration-empty-line-before': 'never',
    // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-newline-after': 'always',
    // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-semicolon-space-before': 'never',
    // Require or disallow a trailing semicolon within declaration blocks.
    'declaration-block-trailing-semicolon': 'always'
  }
};
