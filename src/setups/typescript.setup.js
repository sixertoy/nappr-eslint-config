import globals from 'globals';
import tseslint from 'typescript-eslint';

import { typescriptRules } from '../rules/index.js';

/**
 * Configuration TypeScript avec règles strictes
 */
export const typescriptSetup = [
  // ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    name: '@nappr/eslint-config/typescript-setup',
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.json'],
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
      'no-unused-vars': 'off',
      ...typescriptRules,
    },
  },
  {
    name: '@nappr/eslint-config/disabled-typescript-setup',
    files: ['**/*.{js,jsx}'],
    extends: [
      tseslint.configs.disableTypeChecked,
    ],
  },
];
