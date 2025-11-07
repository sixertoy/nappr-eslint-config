import json from '@eslint/json';

import { jsonRules } from '../rules/index.js';

/**
 * Configuration pour les fichiers JSON
 */
export const jsonConfig = [
  json.configs.recommended,
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', 'yarn.lock'],
    rules: {
      ...jsonRules,
    },
  },
];
