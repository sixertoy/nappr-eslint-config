/**
 * Règles de style avec ESLint Stylistic
 * Remplace les règles de formatage dépréciées d'ESLint core
 */
export const stylisticRules = {
  // Indentation
  '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],

  // Guillemets
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

  // Point-virgule
  '@stylistic/semi': ['error', 'always'],

  // Espacement
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': ['error', { before: false, after: true }],
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/space-before-blocks': ['error', 'always'],
  '@stylistic/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
  '@stylistic/spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],

  // Lignes
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  '@stylistic/no-trailing-spaces': 'error',

  // Parenthèses et accolades
  '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

  // Opérateurs
  '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],

  // Autres
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/computed-property-spacing': ['error', 'never'],
  '@stylistic/func-call-spacing': ['error', 'never'],
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/max-len': [
    'error',
    {
      code: 100,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/quote-props': ['error', 'as-needed'],
  '@stylistic/semi-spacing': ['error', { before: false, after: true }],
  '@stylistic/semi-style': ['error', 'last'],
};
