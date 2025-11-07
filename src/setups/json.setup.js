import json from '@eslint/json';

import { jsonRules } from '../rules/index.js';

/**
 * Configuration pour les fichiers JSON
 */
export const jsonSetup = [
  {
    name: '@eslint/json/recommended-config',
    ...json.configs.recommended,
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', 'yarn.lock'],
    name: '@nappr/eslint-config/json-setup',
    rules: {
      ...jsonRules,
    },
  },
];
