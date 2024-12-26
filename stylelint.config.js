export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended', 'stylelint-config-tailwindcss'],
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-block-trailing-semicolon': 'always',
    'no-duplicate-selectors': true,
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'tailwindcss/no-custom-classname': [true, { severity: 'warning' }],
  },
  ignoreFiles: ['**/*.js', '**/*.ts'],
};
