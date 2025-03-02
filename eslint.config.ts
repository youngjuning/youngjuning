import globals from 'globals';
import tseslint from 'typescript-eslint';
import youngjuning from './packages/eslint-config';

export default tseslint.config(
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  youngjuning
);
