# @nappr/eslint-config - AI Agent Reference

Reference documentation for AI agents working with the `@nappr/eslint-config` library.

## Overview

`@nappr/eslint-config` is a shared, modular ESLint configuration for Nappr projects. Uses ESLint 9+ **Flat Config** format. Provides ready-to-use configurations for TypeScript, React, and Node.js.

## Installation

```bash
yarn add -D @nappr/eslint-config
```

**Requirements:**
- Node.js >= 18.0.0
- ESLint >= 9.0.0
- Prettier >= 3.0.0 (recommended)

## Export Structure

### Main Exports

The package exports two configuration types:

1. **Complete configurations** (recommended for quick setup)
   - `reactConfig` - Complete configuration for React projects
   - `nodeConfig` - Complete configuration for Node.js projects

2. **Modular configurations** (for fine-grained customization)
   - `baseConfig` - Base configuration with ignores
   - `typescriptConfig` - Strict TypeScript rules
   - `reactConfig` - React rules and hooks
   - `jsxA11yConfig` - JSX accessibility rules
   - `importsConfig` - Import rules
   - `formattingConfig` - Prettier integration
   - `sortingConfig` - Automatic key sorting
   - `jsonConfig` - JSON file rules
   - `commentsConfig` - ESLint comments management
   - `standardConfig` - ESLint standard rules

### Path-based Exports

Direct imports from paths are available:

```javascript
import reactConfig from '@nappr/eslint-config/react';
import nodeConfig from '@nappr/eslint-config/node';
import baseConfig from '@nappr/eslint-config/base';
import typescriptConfig from '@nappr/eslint-config/typescript';
// etc.
```

## Basic Usage

### React Project

```javascript
// eslint.config.js
import { reactConfig } from '@nappr/eslint-config';

export default [
  ...reactConfig,
  {
    ignores: ['dist/**', 'node_modules/**', 'build/**', 'public/**'],
  },
];
```

### Node.js Project

```javascript
// eslint.config.js
import { nodeConfig } from '@nappr/eslint-config';

export default [
  ...nodeConfig,
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '*.config.js'],
  },
];
```

## Modular Configuration

To create a custom configuration, combine required modules:

```javascript
// eslint.config.js
import {
  baseConfig,
  typescriptConfig,
  reactConfig,
  importsConfig,
  formattingConfig,
} from '@nappr/eslint-config';

export default [
  ...baseConfig,
  ...typescriptConfig,
  ...reactConfig,
  ...importsConfig,
  ...formattingConfig,
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },
];
```

## Advanced Customization

### Override Rules

```javascript
// eslint.config.js
import { reactConfig } from '@nappr/eslint-config';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...reactConfig,
  {
    rules: {
      // Disable a rule
      'no-console': 'off',
      // Change rule level
      '@typescript-eslint/no-explicit-any': 'warn',
      // Customize a rule
      'prettier/prettier': ['error', { singleQuote: true, tabWidth: 2 }],
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
);
```

### Add File-specific Rules

```javascript
// eslint.config.js
import { reactConfig } from '@nappr/eslint-config';

export default [
  ...reactConfig,
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      // Test-specific rules
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
```

## Key Rules

### TypeScript

- **Type checking strict**: Type error detection
- **No explicit any**: `any` type prohibition (configurable)
- **Consistent type imports**: Type import separation
- **Floating promises**: Unhandled promise detection

### React

- **React hooks**: Recommended hook rules
- **JSX best practices**: JSX best practices
- **No array index key**: Prohibits using index as key
- **Props sorting**: Automatic JSX props sorting

### Imports

- **Simple import sort**: Automatic import sorting
- **No default export**: Default export prohibition
- **No cycles**: Circular dependency detection

### Formatting

- **Prettier integration**: Full Prettier integration
- Formatting rules are handled by Prettier, not ESLint

## Implementation Guidelines

### When to Use This Library

1. **Nappr projects**: Always use this configuration for consistency
2. **New projects**: Use `reactConfig` or `nodeConfig` based on project type
3. **Existing projects**: Migrate gradually using modular configurations

### Required Patterns

1. **Always include `ignores` block**: Customize ignored files per project
2. **Use complete configurations**: Prefer `reactConfig` or `nodeConfig` over rebuilding
3. **Override rules sparingly**: Only override rules when necessary
4. **Test after modification**: Verify configuration with `yarn lint`

### Common Errors to Avoid

❌ **Incorrect:**
```javascript
// Missing spread operator
export default [reactConfig]; // ❌

// Missing ignores block
export default [...reactConfig]; // ❌
```

✅ **Correct:**
```javascript
export default [
  ...reactConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]; // ✅
```

## CLI Command

The package includes a CLI command for quick help access:

```bash
yarn @nappr/eslint-config --help
```

## Internal Structure (Reference)

- `src/configs/` - Complete configurations (react, node)
- `src/setups/` - Individual modular configurations
- `src/rules/` - Specific rule definitions
- `src/plugins/` - ESLint plugins used

## Resources

- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [TypeScript ESLint](https://typescript-eslint.io/)
- Project README.md for additional details

## Validation Checklist

When using this library, verify:

- [ ] ESLint 9+ is installed
- [ ] `eslint.config.js` uses Flat Config format
- [ ] Configurations are spread with `...config`
- [ ] An `ignores` block is present
- [ ] Custom rules are in a separate object
- [ ] Configuration is tested with `yarn lint`
