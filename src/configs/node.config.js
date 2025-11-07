import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { baseConfig } from './base.config.js';
import { typescriptConfig } from './typescript.config.js';
import { importsConfig } from './imports.config.js';
import { formattingConfig } from './formatting.config.js';
import { stylisticConfig } from './stylistic.config.js';
import { sortingConfig } from './sorting.config.js';
import { jsonConfig } from './json.config.js';
import { commentsConfig } from './comments.config.js';
import { standardConfig } from './standard.config.js';

/**
 * Configuration complète pour projets Node.js
 * Inclut le support des tests Vitest
 */
export const nodeConfig = [
  ...baseConfig,
  ...typescriptConfig,
  ...importsConfig,
  ...stylisticConfig,
  ...formattingConfig,
  ...sortingConfig,
  ...jsonConfig,
  ...commentsConfig,
  ...standardConfig,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.json'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
        // Vitest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
    },
  },
];
