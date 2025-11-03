/**
 * Règles JSX A11y pour l'accessibilité
 * Note: Les règles recommandées de jsx-a11y sont appliquées dans la configuration
 */
export const jsxA11yRules = {
  'jsx-a11y/anchor-has-content': [
    'error',
    {
      components: [],
    },
  ],
  'jsx-a11y/control-has-associated-label': [
    'error',
    {
      controlComponents: [],
      depth: 5,
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      labelAttributes: ['label'],
    },
  ],
  'jsx-a11y/heading-has-content': [
    'error',
    {
      components: [''],
    },
  ],
  'jsx-a11y/label-has-associated-control': [
    'warn',
    {
      assert: 'htmlFor',
    },
  ],
  'jsx-a11y/lang': ['error'],
  'jsx-a11y/media-has-caption': [
    'error',
    {
      audio: [],
      track: [],
      video: [],
    },
  ],
  'jsx-a11y/no-autofocus': [
    'error',
    {
      ignoreNonDOM: true,
    },
  ],
  'jsx-a11y/no-noninteractive-element-interactions': [
    'error',
    {
      alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
      body: ['onError', 'onLoad'],
      dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
      handlers: [
        'onClick',
        'onError',
        'onLoad',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
      iframe: ['onError', 'onLoad'],
      img: ['onError', 'onLoad'],
    },
  ],
  'jsx-a11y/no-static-element-interactions': [
    'error',
    {
      allowExpressionValues: true,
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    },
  ],
};
