module.exports = {
    'extends': 'plugin:vue/recommended',
    'parserOptions': {
        parser: 'babel-eslint',
    },
    'rules': {
        'indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'vue/html-indent': ['error', 4],
        'comma-dangle': ['warn', 'always-multiline'],
    },
};
