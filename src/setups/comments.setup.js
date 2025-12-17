import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';

import { commentsRules } from '../rules/index.js';

/**
 * Configuration pour les commentaires ESLint
 */
export const commentsSetup = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.{json,jsonc}'],
    name: '@nappr/eslint-config/comments-setup',
    plugins: {
      '@eslint-community/eslint-comments': eslintComments,
    },
    rules: {
      ...eslintComments.configs.recommended.rules,
      ...commentsRules,
    },
  },
];
