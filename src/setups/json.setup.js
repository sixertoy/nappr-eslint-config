import json from '@eslint/json';
import tseslint from 'typescript-eslint';

import { jsonRules } from '../rules/index.js';

/**
 * Configuration pour les fichiers JSON
 */
export const jsonSetup = [
  {
    ...tseslint.configs.disableTypeChecked,
    files: ['**/*.{json,jsonc}'],
  },
  {
    name: '@eslint/json/recommended-config',
    ...json.configs.recommended,
  },
  {
    files: ['**/*.{json,jsonc}'],
    ignores: ['package-lock.json', 'yarn.lock'],
    name: '@nappr/eslint-config/json-setup',
    rules: {
      ...jsonRules,
    },
  },
];
