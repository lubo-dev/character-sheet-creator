module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/plugins/**",
    "!/node_modules/"
  ]
};
