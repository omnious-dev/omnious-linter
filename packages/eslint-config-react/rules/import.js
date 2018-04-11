module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': ['node_modules'],
    'import/core-modules': [],
    'import/external-module-folders': ['node_modules']
  },
  rules: {
    /**
     * Static analysis
     */
    // Ensure imports point to a file/module that can be resolved
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: false,
        caseSensitive: true
      }
    ],
    // Ensure named imports correspond to a named export in the remote file
    'import/named': 'error',
    // Ensure a default export is present, given a default import
    'import/default': 'error',
    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': [
      'error',
      {
        allowComputed: false
      }
    ],
    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': [
      'off',
      {
        zones: [
          {
            target: '',
            from: ''
          }
        ]
      }
    ],
    // Forbid import of modules using absolute paths
    'import/no-absolute-path': [
      'error',
      {
        esmodule: true,
        commonjs: true,
        amd: false
      }
    ],
    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'error',
    // Prevent importing the submodules of other modules
    'import/no-internal-modules': [
      'off',
      {
        allow: []
      }
    ],
    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',
    // Forbid a module from importing itself
    // NOTE: proposal
    // 'import/no-self-import': 'error',

    /**
     * Helpful warnings
     */
    // Report any invalid exports, i.e. re-export of the same name
    'import/export': 'error',
    // Report use of exported name as identifier of default export
    'import/no-named-as-default': 'error',
    // Report use of exported name as property of default export
    'import/no-named-as-default-member': 'error',
    // Report imported names marked with @deprecated documentation tag
    // NOTE: stage 0
    'import/no-deprecated': 'off',
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['test/**', '**/webpack.config.**'],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    // Forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 'error',

    /**
     * Module systems
     */
    // Report potentially ambiguous parse goal (script vs. module)
    'import/unambiguous': 'off',
    // Report CommonJS require calls and module.exports or exports.*
    'import/no-commonjs': 'off',
    // Report AMD require and define calls
    'import/no-amd': 'error',
    // No Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    /**
     * Style guide
     */
    // Ensure all imports appear before other statements
    'import/first': ['error', 'absolure-first'],
    // Ensure all exports appear after other statements
    'import/exports-last': 'off',
    // Report repeated import of the same module in multiple places
    'import/no-duplicates': 'error',
    // Report namespace imports
    'import/no-namespace': 'off',
    // Ensure consistent use of file extension within the import path
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never'
        // ignorePackages: true
      }
    ],
    // Enforce a convention in module import order
    'import/order': [
      'off',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'never'
      }
    ],
    // Enforce a newline after import statements
    'import/newline-after-import': [
      'error',
      {
        count: 2
      }
    ],
    // Prefer a default export if module exports a single name
    'import/prefer-default-export': 'off',
    // Limit the maximum number of dependencies a module can have
    'import/max-dependencies': [
      'off',
      {
        max: 10
      }
    ],
    // Forbid unassigned imports
    'import/no-unassigned-import': [
      'off',
      {
        allow: []
      }
    ],
    // Forbid named default exports
    'import/no-named-default': 'error',
    // Forbid anonymous values as default exports
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: true,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        // allowCallExpression: true,
        allowLiteral: false,
        allowObject: true
      }
    ],
    // Prefer named exports to be grouped together in a single export declaration
    'import/group-exports': 'off'
  }
};
