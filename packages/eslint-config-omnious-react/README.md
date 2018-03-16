<div align="center">
  <a href="https://github.com/omnious-dev/omnious-linter/tree/master/packages/eslint-config-omnious" title="ESLint Config Omnious React">
    <img alt="ESLint Config Omnious React" src="https://raw.githubusercontent.com/omnious-dev/i/master/omnious-logo.png" width="240px" />
  </a>
  <br />
  <h1>eslint-config-omnious-react</h1>
</div>

<p align="center">
  Extended Omnious's ESLint <a href="http://eslint.org/docs/developer-guide/shareable-configs.html">shareable config</a> for React projects
</p>

<div align="center">
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
$ npm install -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-omnious-react
# Yarn
$ yarn add -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-omnious-react
```

## Usage

```js
{
    "extends": "omnious-react",
    "rules": {
        // Additional, per-project rules...
    }
}
```

## License

[MIT](https://github.com/omnious-dev/omnious-linter/blob/master/LICENSE) © [Omnious](https://www.omnious.com)
