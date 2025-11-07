import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import globals from 'globals';

import { importRules, sortingRules, standardRules } from '../rules/index.js';

/**
 * Configuration avec règles ESLint standard strictes
 */
export const standardSetup = [
  globalIgnores([
    'dist',
    'build',
    'coverage',
    'node_modules',
    '**/*.d.ts',
    '*.vite.js',
    '*.config.js',
    '*.config.json',
    'tsconfig*.json',
    'package.json',
    'package-lock.json',
    'yarn.lock',
  ]),
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.json'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    name: '@nappr/eslint-config/standard-setup',
    plugins: {
      // import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'sort-destructure-keys': sortDestructureKeys,
      'sort-keys-fix': sortKeysFix,
    },
    rules: {
      ...standardRules,
      ...importRules,
      ...sortingRules,
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
