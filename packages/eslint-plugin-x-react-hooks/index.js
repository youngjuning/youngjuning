module.exports = {
  configs: {
    recommended: {
      plugins: ['x-react-hooks'],
      rules: {
        'x-react-hooks/no-json-stringify-in-deps': 'error',
      },
    },
  },
  rules: {
    'no-json-stringify-in-deps': require('./rules/no-json-stringify-in-deps')
  },
};
