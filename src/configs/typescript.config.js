import globals from 'globals';
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
    ignores: ['**/*.json'],
    files: ['**/*.{ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.es2020,
        ...globals.browser,
        ...globals.serviceworker,
      },
      parserOptions: {
        ecmaVersion: 2020,
        projectService: true,
      },
    },
    rules: {
      ...typescriptRules,
    },
  },
];
