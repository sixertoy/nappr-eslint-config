import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

import { formattingRules } from '../rules/index.js';

/**
 * Configuration Prettier avec intégration ESLint
 */
export const formattingConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...formattingRules,
    },
  },
  prettierConfig,
];
