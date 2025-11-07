import jsxA11y from 'eslint-plugin-jsx-a11y';

import { jsxA11yRules } from '../rules/index.js';

/**
 * Configuration JSX A11y pour l'accessibilité
 */
export const jsxA11yConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.json'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...jsxA11yRules,
    },
  },
];
