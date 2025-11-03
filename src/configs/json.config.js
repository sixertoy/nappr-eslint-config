import json from '@eslint/json';

import { jsonRules } from '../rules/index.js';

/**
 * Configuration pour les fichiers JSON
 */
export const jsonConfig = [
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    plugins: {
      json,
    },
    language: 'json/json',
    extends: ['json/recommended'],
    rules: {
      ...jsonRules,
    },
  },
];
