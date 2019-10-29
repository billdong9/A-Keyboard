module.exports = {
    entry: {
        index: './src/index.js',
        indexVue: './src/vue/index.vue.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    }
}
