import { nodeConfig } from '@nappr/eslint-config';

export default [
  ...nodeConfig,
  {
    name: '@nappr/eslint-config/debug',
    ignores: ['dist/**', 'node_modules/**', 'build/**', 'public/**'],
  },
];
