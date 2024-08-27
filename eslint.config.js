import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxa11y from 'eslint-plugin-jsx-a11y';
import sort from 'eslint-plugin-sort';

export default tseslint.config(
  { ignores: ['dist', 'src/components/ui'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, jsxa11y.flatConfigs.strict],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      sort: sort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-require-imports': ['error'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'sort/imports': [
        'error',
        {
          groups: [
            { type: 'side-effect', order: 10 },
            { regex: '\\.(png|jpg|svg)$', order: 40 },
            { type: 'dependency', order: 20 },
            { type: 'other', order: 30 },
          ],
          separator: '\n',
        },
      ],
    },
  },
  {
    files: ['tailwind.config.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
