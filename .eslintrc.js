module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'warn',
    'import/no-unresolved': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    'class-methods-use-this': 'warn',
    'import/prefer-default-export': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/state-in-constructor': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'no-underscore-dangle': 'warn',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/require-default-props': 'warn',
  },
  ignorePatterns: ['node_modules/', '.eslintrc.js'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    ignore: ['**/*.js'],
  },
};
