module.exports = {
  plugins: [
    // ...
    'react-hooks',
  ],
  extends: ['react-app', 'plugin:storybook/recommended'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-debugger': 'error',
    'no-var': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
