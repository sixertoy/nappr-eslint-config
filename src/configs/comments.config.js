import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';

import { commentsRules } from '../rules/index.js';

/**
 * Configuration pour les commentaires ESLint
 */
export const commentsConfig = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.json'],
    plugins: {
      '@eslint-community/eslint-comments': eslintComments,
    },
    rules: {
      ...eslintComments.configs.recommended.rules,
      ...commentsRules,
    },
  },
];
