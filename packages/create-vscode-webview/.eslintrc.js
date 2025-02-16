module.exports = {
  root: true,
  extends: ['@zisheng/eslint-config-react-typescript'],
  ignorePatterns: ['lib', '**/*.d.ts', 'template'],
  rules: {
    'no-console': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
