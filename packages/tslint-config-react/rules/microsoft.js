'use strict';

module.exports = {
  rulesDirectory: 'tslint-microsoft-contrib',
  rules: {
    // For accessibility of your website, anchor element link text should be at least 4 characters long.
    'react-a11y-anchors': true,
    // For accessibility of your website, enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    'react-a11y-aria-unsupported-elements': true,
    // For accessibility of your website, Elements with event handlers must have explicit role or implicit role.
    'react-a11y-event-has-role': true,
    // For accessibility of your website, enforce that inputs element with type="image" must have non-empty alt attribute.
    'react-a11y-image-button-has-alt': true,
    // Enforce that an img element contains the alt attribute or role='presentation' for a decorative image.
    'react-a11y-img-has-alt': true,
    // For accessibility of your website, HTML elements must have a lang attribute and the attribute must be a valid language code.
    'react-a11y-lang': true,
    // For accessibility of your website, HTML meta elements must not have http-equiv="refresh".
    'react-a11y-meta': true,
    // For accessibility of your website, enforce all aria-* attributes are valid.
    'react-a11y-props': true,
    // For accessibility of your website, enforce the type of aria state and property values are correct.
    'react-a11y-proptypes': true,
    // For accessibility of your website, elements with aria roles must have all required attributes according to the role.
    'react-a11y-role-has-required-aria-props': true,
    // For accessibility of your website, enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
    'react-a11y-role-supports-aria-props': true,
    // For accessibility of your website, elements with aria roles must use a valid, non-abstract aria role.
    'react-a11y-role': true,
    // For accessibility of your website, enforce tabindex value is not greater than zero.
    'react-a11y-tabindex-no-positive': true,
    // For accessibility of your website, HTML title elements must not be empty, must be more than one word, and must not be more than 60 characters long.
    'react-a11y-titles': true,
    // For security reasons, anchor tags with target="_blank" should also include rel="noopener noreferrer".
    'react-anchor-blank-noopener': true,
    // React iframes must specify a sandbox attribute.
    'react-iframe-missing-sandbox': true,
    // Do not use React's dangerouslySetInnerHTML API.
    'react-no-dangerous-html': true,
    // Several errors can occur when using React and React.Component subclasses.
    'react-this-binding-issue': [true, { 'allow-anonymous-listeners': true }],
    // Consistently use spaces around the brace characters of JSX attributes.
    'react-tsx-curly-spacing': [true, 'never', { allowMultiline: true }],
    // Remove unneeded properties defined in React Props and State interfaces.
    'react-unused-props-and-state': false
  }
};
