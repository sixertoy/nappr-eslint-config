/**
 * Règles TypeScript strictes
 */
export const typescriptRules = {
  '@typescript-eslint/await-thenable': ['error'],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      disallowTypeAnnotations: true,
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    },
  ],
  '@typescript-eslint/default-param-last': ['error'],
  '@typescript-eslint/dot-notation': ['error'],
  '@typescript-eslint/no-array-delete': ['error'],
  '@typescript-eslint/no-base-to-string': ['error'],
  '@typescript-eslint/no-confusing-void-expression': ['error'],
  '@typescript-eslint/no-dupe-class-members': ['error'],
  '@typescript-eslint/no-duplicate-type-constituents': ['error'],
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  '@typescript-eslint/no-floating-promises': ['error'],
  '@typescript-eslint/no-for-in-array': ['error'],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-loop-func': ['error'],
  '@typescript-eslint/no-meaningless-void-operator': ['error'],
  '@typescript-eslint/no-mixed-enums': ['error'],
  '@typescript-eslint/no-redeclare': ['error'],
  '@typescript-eslint/no-redundant-type-constituents': ['error'],
  '@typescript-eslint/no-shadow': ['error'],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
  '@typescript-eslint/no-unnecessary-condition': ['error'],
  '@typescript-eslint/no-unnecessary-template-expression': ['error'],
  '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  '@typescript-eslint/no-unsafe-argument': ['off'],
  '@typescript-eslint/no-unsafe-assignment': ['off'],
  '@typescript-eslint/no-unsafe-call': ['off'],
  '@typescript-eslint/no-unsafe-enum-comparison': ['error'],
  '@typescript-eslint/no-unsafe-member-access': ['off'],
  '@typescript-eslint/no-unsafe-return': ['off'],
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: false,
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      classes: true,
      functions: true,
      variables: true,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/only-throw-error': ['error'],
  '@typescript-eslint/prefer-includes': ['error'],
  '@typescript-eslint/prefer-promise-reject-errors': ['error'],
  '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
  '@typescript-eslint/prefer-return-this-type': ['error'],
  '@typescript-eslint/require-await': ['error'],
  '@typescript-eslint/restrict-plus-operands': [
    'error',
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowAny: false,
      allowBoolean: false,
      allowNever: false,
      allowNullish: false,
      allowNumber: false,
      allowRegExp: false,
    },
  ],
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
};
