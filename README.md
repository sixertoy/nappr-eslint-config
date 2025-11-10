# @nappr/eslint-config

Shared and reusable ESLint configuration for Nappr projects. This package provides modular, ready-to-use configurations with strict rules for TypeScript, React, and Node.js, based on best practices.

## 📋 Table of Contents

- [@nappr/eslint-config](#nappreslint-config)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔧 Installation](#-installation)
  - [💻 CLI Command](#-cli-command)
  - [🚀 Quick Start](#-quick-start)
    - [React Project](#react-project)
    - [Node.js Project](#nodejs-project)
  - [📦 Available Configurations](#-available-configurations)
    - [Complete Configurations](#complete-configurations)
    - [Modular Configurations](#modular-configurations)
  - [📝 Included Rules](#-included-rules)
    - [TypeScript](#typescript)
    - [React](#react)
    - [Accessibility (JSX A11y)](#accessibility-jsx-a11y)
    - [Imports](#imports)
    - [Formatting](#formatting)
    - [Sorting](#sorting)
    - [JSON](#json)
    - [ESLint Standard](#eslint-standard)
  - [⚙️ Requirements](#️-requirements)
  - [📚 Resources](#-resources)

## 🔧 Installation

```bash
yarn add -D @nappr/eslint-config
```

## 💻 CLI Command

The package includes a CLI command to quickly access help and information:

```bash
# Display help
yarn @nappr/eslint-config --help

# Or simply
yarn @nappr/eslint-config
```

The CLI displays:
- Available configurations (reactConfig, nodeConfig)
- Modular modules you can use
- Usage examples
- Link to full documentation

This is especially useful when you need a quick reference without opening the README.

## 🚀 Quick Start

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

## 📦 Available Configurations

### Complete Configurations

1. **`reactConfig`** - Complete configuration for React projects with all rules
2. **`nodeConfig`** - Complete configuration for Node.js projects with Vitest test support

### Modular Configurations

You can combine modules according to your needs:

1. **`baseConfig`** - Default files to ignore
2. **`typescriptConfig`** - Strict TypeScript rules
3. **`reactConfig`** - React rules and hooks
4. **`jsxA11yConfig`** - JSX accessibility rules
5. **`importsConfig`** - Import rules with automatic sorting
6. **`formattingConfig`** - Prettier integration
7. **`sortingConfig`** - Automatic sorting of object keys and destructuring
8. **`jsonConfig`** - JSON file rules
9. **`commentsConfig`** - ESLint comments management
10. **`standardConfig`** - Strict ESLint standard rules

For detailed usage examples and advanced customization, see [AGENT.md](./AGENT.md).

## 📝 Included Rules

### TypeScript

Strict TypeScript rules including:

- ✅ **Type checking strict**: Type error detection at compilation
- ✅ **Consistent type imports**: Type import separation
- ✅ **No explicit any**: `any` type prohibition (configurable)
- ✅ **No unsafe operations**: Detection of unsafe operations (configurable)
- ✅ **Await thenable**: Verification of unawaited promises
- ✅ **Floating promises**: Detection of unhandled promises
- ✅ And 30+ other strict TypeScript rules

### React

React rules including:

- ✅ **React hooks**: Recommended rules for hooks
- ✅ **JSX best practices**: JSX best practices
- ✅ **React Refresh**: Support for React Fast Refresh
- ✅ **Destructuring assignment**: Force destructuring
- ✅ **JSX fragments**: Appropriate fragment usage
- ✅ **No bind in JSX**: Prohibition of bind in JSX (arrow functions allowed)
- ✅ **Props sorting**: Automatic JSX props sorting
- ✅ **No array index key**: Prohibition of using index as key
- ✅ And 15+ other strict React rules

### Accessibility (JSX A11y)

Accessibility rules including:

- ✅ **Anchor has content**: Links must have content
- ✅ **Control has associated label**: Controls must have a label
- ✅ **Heading has content**: Headings must have content
- ✅ **Media has caption**: Media must have captions
- ✅ **No autofocus**: Autofocus control
- ✅ **Static element interactions**: Management of interactions on static elements
- ✅ And all recommended jsx-a11y rules

### Imports

Import organization rules:

- ✅ **Simple import sort**: Automatic import sorting
- ✅ **No default export**: Default export prohibition
- ✅ **No cycles**: Circular dependency detection
- ✅ **Extensions**: File extension management
- ✅ **No duplicates**: Duplicate import detection
- ✅ And 15+ rules for import management

### Formatting

- ✅ **Prettier integration**: Full Prettier integration
- ✅ **Multiline ternary**: Multi-line ternaries
- ✅ **Prettier/prettier**: Prettier execution via ESLint

### Sorting

- ✅ **Sort keys fix**: Automatic object key sorting
- ✅ **Sort destructure keys**: Automatic key sorting in destructuring

### JSON

- ✅ **Sort keys**: Key sorting in JSON files
- ✅ **Top level interop**: Top-level JSON validation

### ESLint Standard

60+ strict ESLint standard rules including:

- ✅ **Array callback return**: Returns in array callbacks
- ✅ **Block scoped var**: Use of `let`/`const` instead of `var`
- ✅ **Consistent return**: Consistent returns
- ✅ **No eval**: `eval` prohibition
- ✅ **No param reassign**: Parameter reassignment management
- ✅ **Prefer const**: Preference for `const`
- ✅ **Prefer template**: Use of template literals
- ✅ And many other code quality rules

## ⚙️ Requirements

- **Node.js**: >= 18.0.0
- **ESLint**: >= 9.0.0 (Flat Config)
- **TypeScript**: Recommended for better experience
- **Prettier**: >= 3.0.0 (recommended)

## 📚 Resources

- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier](https://prettier.io/)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)
- [AGENT.md](./AGENT.md) - Detailed reference for AI agents and advanced usage
