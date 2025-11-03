import globals from 'globals';
import tseslint from 'typescript-eslint';

import { nodeConfig } from '../configs/index.config.js';

/**
 * Configuration recommandée pour les tests Vitest
 * Étend la configuration Node.js avec les globals Vitest supplémentaires
 * Note: La config node inclut déjà les globals Vitest de base
 */
export const vitest = [
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
        // Vitest globals supplémentaires
        vitest: 'readonly',
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
