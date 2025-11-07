import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import { importRules } from '../rules/index.js';

/**
 * Configuration pour les imports avec tri automatique
 */
export const importsConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.json', '**/*.d.ts', '**/*.config.{js,ts}', '**/*.recommended.{js,ts}', '**/eslint.config.js'],
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...importRules,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
];
