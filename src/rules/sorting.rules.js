/**
 * Règles pour le tri automatique des clés dans les objets et destructuring
 */
export const sortingRules = {
  'sort-keys-fix/sort-keys-fix': 'error',
  'sort-destructure-keys/sort-destructure-keys': [
    'error',
    {
      caseSensitive: false,
      natural: true,
    },
  ],
};
