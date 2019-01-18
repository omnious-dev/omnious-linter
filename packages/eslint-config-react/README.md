<div align="center">
  <a href="https://github.com/omnious/omnious-linter/tree/master/packages/eslint-config-react" title="ESLint Config Omnious React">
    <img alt="ESLint Config Omnious React" src="https://raw.githubusercontent.com/omnious-dev/i/master/omnious-logo.png" width="240px" />
  </a>
  <br />
  <h1>@omnious/eslint-config-react</h1>
</div>

<p align="center">
  ESLint <a href="http://eslint.org/docs/developer-guide/shareable-configs.html">shareable config</a> for the Omnious JavaScript React projects
</p>

<div align="center">
  <!-- <a href="https://circleci.com/gh/omnious-dev/eslint-config-omnious">
    <img alt="CircleCI" src="https://circleci.com/gh/omnious-dev/eslint-config-omnious.svg?style=shield" />
  </a> -->
  <a href="https://badge.fury.io/js/@omnious/eslint-config-react">
    <img alt="npm version" src="https://badge.fury.io/js/@omnious/eslint-config-react.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@omnious/eslint-config-react">
    <img alt="npm" src="https://img.shields.io/npm/dt/@omnious/eslint-config-react.svg" />
  </a>
  <a href="https://david-dm.org/omnious-dev/@omnious/eslint-config-react">
    <img alt="npm" src="https://img.shields.io/david/omnious-dev/@omnious/eslint-config-react.svg?style=flat-square" />
  </a>
  <a href="https://opensource.org/licenses/mit-license.php">
    <img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" />
  </a>
  <a href="https://github.com/ellerbrock/open-source-badge/">
    <img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" />
  </a>
</div>

<br />

## Installation

```bash
# NPM
$ npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y @omnious/eslint-config-react
# Yarn
$ yarn add -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y @omnious/eslint-config-react
```

## Usage

```js
{
    "extends": "@omnious/eslint-config-react",
    "rules": {
        // Additional, per-project rules...
    }
}
```

### Using the `omnious` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Omnious style is not opinionated about that you might want to enforce in your project.

To use Omnious style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `omnious` last:

```js
{
  "extends": ["eslint:recommended", "@omnious/eslint-config-react"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

[MIT](https://github.com/omnious/omnious-linter/blob/master/LICENSE) © [Omnious](https://www.omnious.com)
