module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'max-len': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: ['next', '_'] }],
    'no-console': 'off',
  },
};
