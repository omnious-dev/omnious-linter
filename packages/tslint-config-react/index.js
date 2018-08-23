'use strict';

module.exports = {
  extends: '@omnious/tslint-config',
  rulesDirectory: ['./rules/react', './rules/microsoft'].map(require.resolve)
};
