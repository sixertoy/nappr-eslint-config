import js from '@eslint/js';
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';

import { nodeConfig } from '../configs/index.config.js';

/**
 * Configuration recommandée pour les tests Jest
 * Étend la configuration Node.js avec les globals Jest
 */
export const jest = [
  ...nodeConfig,
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...jestPlugin.environments.globals.globals,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'no-console': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'jest/no-disabled-tests': 'warn',
      'jest/prefer-expect-assertions': 'off',
    },
  },
];
