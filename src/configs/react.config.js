import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import { reactRules } from '../rules/index.js';
import { baseConfig } from './base.config.js';
import { typescriptConfig } from './typescript.config.js';
import { jsxA11yConfig } from './jsx-a11y.config.js';
import { importsConfig } from './imports.config.js';
import { formattingConfig } from './formatting.config.js';
import { sortingConfig } from './sorting.config.js';
import { jsonConfig } from './json.config.js';
import { commentsConfig } from './comments.config.js';
import { standardConfig } from './standard.config.js';

/**
 * Configuration complète pour projets React
 * Combine toutes les configurations modulaires avec règles React strictes
 */
export const reactConfig = [
  ...baseConfig,
  ...typescriptConfig,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.json'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...reactRules,
    },
  },
  ...jsxA11yConfig,
  ...importsConfig,
  ...formattingConfig,
  ...sortingConfig,
  ...jsonConfig,
  ...commentsConfig,
  ...standardConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
];
