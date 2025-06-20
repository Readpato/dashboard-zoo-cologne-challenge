import antfu from '@antfu/eslint-config'

const ignores = [
  '.nuxt',
  '**/.nuxt/**',
  '.output',
  '**/.output/**',
  'node_modules',
  '**/node_modules/**',
  'public',
  '**/public/**',
  '**/*.md',
]

export default antfu(
  {
    ignores,
    yaml: false,
    vue: {
      a11y: true,
    },
    rules: {
      // Do not force top-level callable defintions to use the `function` keyword, we want to allow arrow functions
      'antfu/top-level-function': 'off',

      // Always force curly braces
      'curly': ['error', 'all'],

      // Use the 1-true-brace-style
      'style/brace-style': ['error', '1tbs'],

      // Always enforce an ending comma on every line
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          functions: 'always-multiline',
          exports: 'always-multiline',
          imports: 'always-multiline',
        },
      ],

      // Enforce spacing around operations like `1 + 2`
      'space-infix-ops': ['error'],
      '@/space-infix-ops': ['error'],

      // Consistently use `type` and not `interface` to declare object-types
      'ts/consistent-type-definitions': ['error', 'type'],

      // Enforce usage of global `process` (instead of `const process = require('process')`)
      'node/prefer-global/process': ['error', 'always'],

      // Not enforced right now as our code-base doesn't adhere to it at time of switch.
      'ts/no-use-before-define': 'off',

      'vue/component-name-in-template-casing': ['off'],
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: 1,
      }],

      // Do not allow unused expressions
      'no-unused-expressions': ['error'],

      // Do not allow re-assigning parameters inside a function
      'no-param-reassign': ['error'],

      // Do not allow implicit switch-fallthrough
      'no-fallthrough': ['error'],
    },
  },
  // Allow only certain `console.` invocations
  {
    ignores,
    files: ['**/*.{ts,vue}'],
    rules: {
      'no-console': [
        'error',
        {
          allow: ['info', 'warn', 'trace', 'error', 'group', 'groupEnd'],
        },
      ],
    },
  },
)
