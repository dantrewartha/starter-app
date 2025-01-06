import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginVue from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import vueParser from 'vue-eslint-parser';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import securityPlugin from 'eslint-plugin-security';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['src/**/*.{js,ts,vue}'],
  ignores: ['node_modules', 'dist', 'public', 'deployment', 'nginx-docker'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.eslint.json'],
      extraFileExtensions: ['.vue'],
    },
    globals: {
      ...globals.browser,
      APP_VERSION: 'readonly', // Add APP_VERSION as a global constant
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
  },
  plugins: {
    js: pluginJs,
    '@typescript-eslint': tseslint,
    vue: pluginVue,
    prettier: prettierPlugin,
    tailwindcss: tailwindPlugin,
    import: importPlugin,
    promise: promisePlugin,
    security: securityPlugin,
  },
  rules: {
    // JavaScript Core Rules
    ...pluginJs.configs.recommended.rules,

    // TypeScript Rules
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

    // Vue Rules
    'vue/no-v-html': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'warn',
    'vue/array-bracket-newline': ['error', 'consistent'],
    'vue/array-element-newline': ['error', 'consistent'],
    'vue/object-curly-newline': ['error', { consistent: true }],
    'vue/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: false,
        ignoreWhenEmpty: false,
      },
    ],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', prev: '*', next: '*' }]],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'never',
        },
      },
    ],

    // TailwindCSS Rules
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',

    // Prettier Rules
    'prettier/prettier': ['error', prettierConfig],

    // ESLint Core Rules
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'id-length': ['warn', { exceptions: ['i', 'j', '_'] }],

    // Import Plugin Rules
    'import/order': [
      'warn',
      {
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'warn',
    'import/no-duplicates': 'error',

    // Promise Plugin Rules
    'promise/always-return': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'warn',
    'promise/no-nesting': 'warn',

    // Security Plugin Rules
    'security/detect-object-injection': 'warn',
  },
};
