# @nappr/eslint-config

Configuration ESLint partagée et réutilisable pour les projets Nappr. Ce package fournit des configurations modulaires prêtes à l'emploi avec des règles strictes pour TypeScript, React et Node.js, basées sur les meilleures pratiques.

## 📋 Table des matières

- [@nappr/eslint-config](#nappreslint-config)
  - [📋 Table des matières](#-table-des-matières)
  - [🔧 Installation](#-installation)
  - [📦 Configurations disponibles](#-configurations-disponibles)
    - [Configurations complètes](#configurations-complètes)
    - [Configurations modulaires](#configurations-modulaires)
  - [🚀 Utilisation](#-utilisation)
    - [Configuration React](#configuration-react)
    - [Configuration Node.js](#configuration-nodejs)
    - [Configuration modulaire personnalisée](#configuration-modulaire-personnalisée)
    - [Personnalisation avancée](#personnalisation-avancée)
  - [📝 Règles incluses](#-règles-incluses)
    - [TypeScript](#typescript)
    - [React](#react)
    - [Accessibilité (JSX A11y)](#accessibilité-jsx-a11y)
    - [Imports](#imports)
    - [Formatting](#formatting)
    - [Sorting](#sorting)
    - [JSON](#json)
    - [ESLint Standard](#eslint-standard)
  - [⚙️ Configuration requise](#️-configuration-requise)
  - [📚 Ressources](#-ressources)

## 🔧 Installation

```bash
# Via yarn/npm (si le package est publié)
yarn add -D @nappr/eslint-config
```

## 📦 Configurations disponibles

### Configurations complètes

1. **`reactConfig`** - Configuration complète pour projets React avec toutes les règles
2. **`nodeConfig`** - Configuration complète pour projets Node.js avec support des tests Vitest

### Configurations modulaires

Vous pouvez combiner les modules selon vos besoins :

1. **`baseConfig`** - Fichiers à ignorer par défaut
2. **`typescriptConfig`** - Règles TypeScript strictes
3. **`reactConfig`** - Règles React et hooks
4. **`jsxA11yConfig`** - Règles d'accessibilité JSX
5. **`importsConfig`** - Règles pour les imports avec tri automatique
6. **`formattingConfig`** - Intégration Prettier
7. **`sortingConfig`** - Tri automatique des clés d'objets et destructuring
8. **`jsonConfig`** - Règles pour les fichiers JSON
9. **`commentsConfig`** - Gestion des commentaires ESLint
10. **`standardConfig`** - Règles ESLint standard strictes

## 🚀 Utilisation

### Configuration React

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

### Configuration Node.js

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

### Configuration modulaire personnalisée

Vous pouvez combiner les modules selon vos besoins :

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
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '*.config.js'],
  },
];
```

### Personnalisation avancée

Vous pouvez étendre et personnaliser les configurations :

```javascript
// eslint.config.js
import { reactConfig } from '@nappr/eslint-config';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...reactConfig,
  {
    rules: {
      // Surcharger des règles
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '*.config.js'],
  },
);
```

## 📝 Règles incluses

### TypeScript

Règles strictes TypeScript incluant :

- ✅ **Type checking strict** : Détection des erreurs de type à la compilation
- ✅ **Consistent type imports** : Séparation des imports de types
- ✅ **No explicit any** : Interdiction de `any` (configurable)
- ✅ **No unsafe operations** : Détection des opérations non sécurisées (configurable)
- ✅ **Await thenable** : Vérification des promesses non attendues
- ✅ **Floating promises** : Détection des promesses non gérées
- ✅ Et plus de 30 autres règles TypeScript strictes

### React

Règles React incluant :

- ✅ **React hooks** : Règles recommandées pour les hooks
- ✅ **JSX best practices** : Bonnes pratiques JSX
- ✅ **React Refresh** : Support pour React Fast Refresh
- ✅ **Destructuring assignment** : Forcer la déstructuration
- ✅ **JSX fragments** : Utilisation de fragments appropriés
- ✅ **No bind in JSX** : Interdiction des bind dans JSX (arrow functions autorisées)
- ✅ **Props sorting** : Tri automatique des props JSX
- ✅ **No array index key** : Interdiction d'utiliser l'index comme clé
- ✅ Et plus de 15 autres règles React strictes

### Accessibilité (JSX A11y)

Règles d'accessibilité incluant :

- ✅ **Anchor has content** : Les liens doivent avoir du contenu
- ✅ **Control has associated label** : Les contrôles doivent avoir un label
- ✅ **Heading has content** : Les titres doivent avoir du contenu
- ✅ **Media has caption** : Les médias doivent avoir des sous-titres
- ✅ **No autofocus** : Contrôle de l'autofocus
- ✅ **Static element interactions** : Gestion des interactions sur éléments statiques
- ✅ Et toutes les règles recommandées de jsx-a11y

### Imports

Règles d'organisation des imports :

- ✅ **Simple import sort** : Tri automatique des imports
- ✅ **No default export** : Interdiction des exports par défaut
- ✅ **No cycles** : Détection des dépendances circulaires
- ✅ **Extensions** : Gestion des extensions de fichiers
- ✅ **No duplicates** : Détection des imports en double
- ✅ Et plus de 15 règles pour la gestion des imports

### Formatting

- ✅ **Prettier integration** : Intégration complète avec Prettier
- ✅ **Multiline ternary** : Ternaires sur plusieurs lignes
- ✅ **Prettier/prettier** : Exécution de Prettier via ESLint

### Sorting

- ✅ **Sort keys fix** : Tri automatique des clés d'objets
- ✅ **Sort destructure keys** : Tri automatique des clés dans le destructuring

### JSON

- ✅ **Sort keys** : Tri des clés dans les fichiers JSON
- ✅ **Top level interop** : Validation des JSON de haut niveau

### ESLint Standard

Plus de 60 règles ESLint standard strictes incluant :

- ✅ **Array callback return** : Retours dans les callbacks de tableaux
- ✅ **Block scoped var** : Utilisation de `let`/`const` au lieu de `var`
- ✅ **Consistent return** : Retours cohérents
- ✅ **No eval** : Interdiction de `eval`
- ✅ **No param reassign** : Gestion de la réassignation de paramètres
- ✅ **Prefer const** : Préférence pour `const`
- ✅ **Prefer template** : Utilisation des template literals
- ✅ Et beaucoup d'autres règles de qualité de code

## ⚙️ Configuration requise

- **Node.js** : >= 18.0.0
- **ESLint** : >= 9.0.0 (Flat Config)
- **TypeScript** : Recommandé pour une meilleure expérience
- **Prettier** : >= 3.0.0 (recommandé)

## 📚 Ressources

- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier](https://prettier.io/)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)
