import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import type { Linter } from 'eslint';

export default [
  eslint.configs.recommended,
  // @ts-expect-error no idea why
  ...tseslint.configs.recommended,
  // @ts-expect-error no idea why
  eslintPluginPrettierRecommended,
] satisfies Linter.Config[];
