module.exports = {
  meta: {
    type: 'suggestion', // 规则类型，这里是建议类型
    docs: {
      description: 'Disallow JSON.stringify in hook dependencies',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/facebook/react/issues/14920',
    },
    messages: {
      noJSONStringifyInDeps: 'JSON.stringify should not be in hook dependencies',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'Identifier' &&
          (
            node.callee.name === 'useEffect' ||
            node.callee.name === 'useLayoutEffect' ||
            node.callee.name === 'useMemo' ||
            node.callee.name === 'useCallback'
          ) &&
          node.arguments.length > 1 &&
          node.arguments[1].type === 'ArrayExpression'
        ) {
          const dependencies = node.arguments[1].elements;
          dependencies.forEach(dependency => {
            console.warn("检查依赖项:", dependency.type, dependency.callee.type)
            if (
              dependency &&
              dependency.type === 'CallExpression' &&
              dependency.callee.type === 'MemberExpression' &&
              dependency.callee.object.type === 'Identifier' &&
              dependency.callee.object.name === 'JSON' &&
              dependency.callee.property.name === 'stringify'
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
