import globals from 'globals';
import tseslint from 'typescript-eslint';
import youngjuning from '@youngjuning/eslint-config';

export default tseslint.config(
  {
    ignores: ['**/dist/**', '**/lib/**'],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  youngjuning
);
