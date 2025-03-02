import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginJest from 'eslint-plugin-jest';

import type { Linter } from 'eslint';

export default [
  eslint.configs.recommended,
  // @ts-expect-error no idea why
  ...tseslint.configs.recommended,
  {
    files: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.js', '**/*.test.js'],
    // @ts-expect-error no idea why
    plugins: {
      jest: pluginJest,
    },
    // @ts-expect-error no idea why
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  // @ts-expect-error no idea why
  eslintPluginPrettierRecommended,
] satisfies Linter.Config[];
