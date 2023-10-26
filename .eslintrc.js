module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:@next/next/recommended', 'prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-unused-vars': ['warn'],
    'import/first': 0,
    'comma-dangle': ['warn', 'always-multiline'],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'block-like'],
        next: ['if', 'return', 'try'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'no-trailing-spaces': 0,
    'react/no-render-return-value': 0,
    'no-useless-catch': 0,
    'require-await': 2,
    'jsx-quotes': ['error', 'prefer-single'],
    'keyword-spacing': ['error'],
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': ['error'],
    'import/order': 0,
    'react/require-default-props': 'off',
    'no-else-return': ['error', { allowElseIf: true }],
  },
  parser: '@typescript-eslint/parser',
};
