import js from '@eslint/js';
import tseslint from 'typescript-eslint';

import { typescriptRules } from '../rules/index.js';

/**
 * Configuration TypeScript avec règles strictes
 */
export const typescriptConfig = [
  ...tseslint.configs.recommended,
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        project: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...typescriptRules,
    },
  },
];
