import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';

import { sortingRules } from '../rules/index.js';

/**
 * Configuration pour le tri automatique des clés dans les objets et destructuring
 */
export const sortingConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.json'],
    plugins: {
      'sort-destructure-keys': sortDestructureKeys,
      'sort-keys-fix': sortKeysFix,
    },
    rules: {
      ...sortingRules,
    },
  },
];
