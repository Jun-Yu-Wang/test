/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    './.eslintrc-auto-import.json',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/valid-template-root': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'off', // 解决replace with

    'no-console': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'guard-for-in': 'off',

    // "import/extensions": "off",
    // "import/no-unresolved": "off",
    // "import/no-extraneous-dependencies": "off",
    // "import/prefer-default-export": "off",
    // "import/first": "off", // https://github.com/vuejs/vue-eslint-parser/issues/58
    // "vue/first-attribute-linebreak": 0
  },
  // parserOptions: {
  //   ecmaVersion: "latest"
  // },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/require-default-prop': 0,
        'vue/multi-word-component-names': 0,
        'vue/no-reserved-props': 0,
        // 'vue/no-v-html': 2,
      },
    },
    // {
    //   files: ["*.ts", "*.tsx"], // https://github.com/typescript-eslint eslint-recommended
    //   rules: {
    //     "constructor-super": "off", // ts(2335) & ts(2377)
    //     "getter-return": "off", // ts(2378)
    //     "no-const-assign": "off", // ts(2588)
    //     "no-dupe-args": "off", // ts(2300)
    //     "no-dupe-class-members": "off", // ts(2393) & ts(2300)
    //     "no-dupe-keys": "off", // ts(1117)
    //     "no-func-assign": "off", // ts(2539)
    //     "no-import-assign": "off", // ts(2539) & ts(2540)
    //     "no-new-symbol": "off", // ts(2588)
    //     "no-obj-calls": "off", // ts(2349)
    //     "no-redeclare": "off", // ts(2451)
    //     "no-setter-return": "off", // ts(2408)
    //     "no-this-before-super": "off", // ts(2376)
    //     "no-undef": "off", // ts(2304)
    //     "no-unreachable": "off", // ts(7027)
    //     "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
    //     "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
    //     "prefer-const": "error", // ts provides better types with const
    //     "prefer-rest-params": "error", // ts provides better types with rest args over arguments
    //     "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply
    //     "valid-typeof": "off" // ts(2367)
    //   }
    // }
  ],
};
