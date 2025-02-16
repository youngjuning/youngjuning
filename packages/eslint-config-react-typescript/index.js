require('./patch');

module.exports = {
  extends: ['@youngjuning/eslint-config-react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true,
        },
        ecmaVersion: 2020,
      },
      rules: {
        ...require('@youngjuning/eslint-rules').javascript,
        ...require('@youngjuning/eslint-rules').typescript,
        ...require('@youngjuning/eslint-rules').javascriptReact,
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          // use <root>/tsconfig.json
          typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root/>@types` directory even it doesn't contain any source code, like `@types/unist`
          },
        },
      },
    },
  ],
};
