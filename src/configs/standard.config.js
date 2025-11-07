import { standardRules } from '../rules/index.js';

/**
 * Configuration avec règles ESLint standard strictes
 */
export const standardConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.json'],
    rules: {
      ...standardRules,
    },
  },
];
