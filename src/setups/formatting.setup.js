import stylistic from '@stylistic/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

import { formattingRules, stylisticRules } from '../rules/index.js';

/**
 * Configuration Prettier avec intégration ESLint
 */
export const formattingSetup = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.json'],
    name: '@nappr/eslint-config/formatting-setup',
    plugins: {
      '@stylistic': stylistic,
      prettier,
    },
    rules: {
      ...stylisticRules,
      ...formattingRules,
    },
  },
  prettierConfig,
];
