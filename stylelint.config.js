module.exports = {
  extends: [
    'stylelint-config-standard', // Base rules for common CSS best practices
    'stylelint-config-recommended', // Recommended minimal setup
    'stylelint-config-recommended-vue', // Recommended minimal setup for Vue
    'stylelint-config-tailwindcss', // Tailwind-specific configurations
  ],
  plugins: [
    'stylelint-order', // Optional: Helps enforce order in CSS properties
  ],
  rules: {
    indentation: 2, // Indentation is 2 spaces
    'block-no-empty': true, // Disallow empty blocks
    'color-no-invalid-hex': true, // Disallow invalid hex colors
    'declaration-block-trailing-semicolon': 'always', // Ensure trailing semicolons in blocks
    'no-duplicate-selectors': true, // Disallow duplicate selectors
    'order/properties-alphabetical-order': true, // Ensure CSS properties are ordered alphabetically
    'at-rule-no-unknown': null, // To support Tailwind's @apply, @variants, etc.
    'tailwindcss/no-custom-classname': [true, { severity: 'warning' }], // Warn on custom class names outside Tailwind conventions
  },
  ignoreFiles: ['**/*.js', '**/*.ts'], // Prevent Stylelint from running on non-CSS files
};
