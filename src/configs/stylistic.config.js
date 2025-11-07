import stylistic from '@stylistic/eslint-plugin';

import { stylisticRules } from '../rules/index.js';

/**
 * Configuration ESLint Stylistic
 * Remplace les règles de formatage dépréciées d'ESLint core
 */
export const stylisticConfig = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.json'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylisticRules,
    },
  },
];
