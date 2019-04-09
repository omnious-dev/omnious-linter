module.exports = {
  rules: {
    'callback-return': ['warn', ['callback', 'next']],
    'global-require': 'error',
    'handle-callback-err': ['error', '^(err|error)$'],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'warn',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': [
      'error',
      {
        allowAtRootLevel: false
      }
    ]
  }
};
