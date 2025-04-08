module.exports = {
  meta: {
    type: 'suggestion', // 规则类型，这里是建议类型
    docs: {
      description: 'Disallow JSON.stringify in hook dependencies',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/youngjuning/youngjuning/tree/main/packages/eslint-plugin-x-react-hooks/rules/no-json-stringify-in-deps.md',
    },
    messages: {
      noJSONStringifyInDeps: 'JSON.stringify should not be in hook dependencies',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee?.type === 'Identifier' &&
          (
            node.callee?.name === 'useEffect' ||
            node.callee?.name === 'useLayoutEffect' ||
            node.callee?.name === 'useMemo' ||
            node.callee?.name === 'useCallback'
          ) &&
          node.arguments?.length > 1 &&
          node.arguments[1]?.type === 'ArrayExpression'
        ) {
          const dependencies = node.arguments[1]?.elements;
          dependencies.forEach(dependency => {
            if (
              dependency &&
              dependency.type === 'CallExpression' &&
              dependency.callee?.type === 'MemberExpression' &&
              dependency.callee?.object?.type === 'Identifier' &&
              dependency.callee?.object?.name === 'JSON' &&
              dependency.callee?.property?.name === 'stringify'
            ) {
              context.report({
                node: dependency,
                messageId: 'noJSONStringifyInDeps',
              });
            }
          });
        }
      },
    };
  },
};
