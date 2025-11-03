/**
 * Règles ESLint standard strictes
 */
export const standardRules = {
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
      allowVoid: false,
      checkForEach: false,
    },
  ],
  'block-scoped-var': ['error'],
  'consistent-return': ['error'],
  'default-case': [
    'error',
    {
      commentPattern: '^no default$',
    },
  ],
  'default-case-last': ['error'],
  eqeqeq: [
    'error',
    'always',
    {
      null: 'ignore',
    },
  ],
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  'guard-for-in': ['error'],
  'no-await-in-loop': ['error'],
  'no-bitwise': ['error'],
  'no-caller': ['error'],
  'no-cond-assign': ['error', 'always'],
  'no-constant-condition': ['warn'],
  'no-constructor-return': ['error'],
  'no-continue': ['error'],
  'no-else-return': [
    'error',
    {
      allowElseIf: false,
    },
  ],
  'no-eval': ['error'],
  'no-extend-native': ['error'],
  'no-extra-bind': ['error'],
  'no-extra-label': ['error'],
  'no-implicit-globals': ['off'],
  'no-inner-declarations': ['error'],
  'no-iterator': ['error'],
  'no-label-var': ['error'],
  'no-labels': [
    'error',
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],
  'no-lone-blocks': ['error'],
  'no-lonely-if': ['error'],
  'no-multi-assign': ['error'],
  'no-multi-str': ['error'],
  'no-nested-ternary': ['error'],
  'no-new': ['error'],
  'no-new-object': ['error'],
  'no-new-symbol': ['error'],
  'no-new-wrappers': ['error'],
  'no-octal-escape': ['error'],
  'no-param-reassign': [
    'error',
    {
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response',
        '$scope',
        'staticContext',
      ],
      props: true,
    },
  ],
  'no-path-concat': ['error'],
  'no-plusplus': ['error'],
  'no-promise-executor-return': ['error'],
  'no-proto': ['error'],
  'no-return-assign': ['error', 'always'],
  'no-script-url': ['error'],
  'no-self-compare': ['error'],
  'no-sequences': ['error'],
  'no-template-curly-in-string': ['error'],
  'no-underscore-dangle': [
    'error',
    {
      allowAfterSuper: false,
      allowAfterThis: false,
      allowAfterThisConstructor: false,
      allowFunctionParams: true,
      allowInArrayDestructuring: true,
      allowInObjectDestructuring: true,
      enforceInClassFields: false,
      enforceInMethodNames: true,
    },
  ],
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false,
    },
  ],
  'no-unreachable-loop': [
    'error',
    {
      ignore: [],
    },
  ],
  'no-unsafe-negation': ['error'],
  'no-unsafe-optional-chaining': [
    'error',
    {
      disallowArithmeticOperators: true,
    },
  ],
  'no-useless-return': ['error'],
  'no-void': ['error', { allowAsStatement: true }],
  'object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: {
        array: true,
        object: false,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-exponentiation-operator': ['error'],
  'prefer-numeric-literals': ['error'],
  'prefer-object-spread': ['error'],
  'prefer-promise-reject-errors': [
    'error',
    {
      allowEmptyReject: true,
    },
  ],
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],
  'prefer-template': ['error'],
  radix: ['error'],
  strict: ['error', 'never'],
  'symbol-description': ['error'],
  'unicode-bom': ['error', 'never'],
  'vars-on-top': ['error'],
  yoda: ['error'],
};
