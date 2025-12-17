import jsxA11y from 'eslint-plugin-jsx-a11y';

import { jsxA11yRules } from '../rules/index.js';

/**
 * Configuration JSX A11y pour l'accessibilité
 */
export const jsxA11ySetup = [
  {
    files: ['**/*.{jsx,tsx}'],
    ignores: ['**/*.{json,jsonc}'],
    name: '@nappr/eslint-config/jsx-a11y-setup',
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...jsxA11yRules,
    },
  },
];
