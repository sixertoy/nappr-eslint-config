import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

import { reactRules } from '../rules/index.js';

/**
 * Configuration React avec intégration ESLint
 */
export const reactSetup = [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.{json,jsonc}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    name: '@nappr/eslint-config/react-setup',
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...reactRules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
