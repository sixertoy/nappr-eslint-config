/**
 * Règles pour les imports avec tri automatique
 */
export const importRules = {
  'import/no-default-export': 'error',
  'import/prefer-default-export': 'off',
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-cycle': [
    'error',
    {
      allowUnsafeDynamicCyclicDependency: false,
      disableScc: false,
      ignoreExternal: false,
      maxDepth: '∞',
    },
  ],
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-import-module-exports': [
    'error',
    {
      exceptions: [],
    },
  ],
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-relative-packages': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': [
    'error',
    {
      commonjs: true,
    },
  ],
  'import/no-webpack-loader-syntax': 'error',
};
