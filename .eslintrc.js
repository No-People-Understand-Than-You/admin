module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off',  //解决 $ 为定义的问题
        'vue/no-unused-vars': 'off',
        'vue/require-v-for-key': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};