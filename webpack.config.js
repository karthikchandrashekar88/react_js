module.exports = {
    entry: './test2.js',
    output: {
        path: './',
        filename: 'main.js',
    },
    devServer:{
      port: 7980  
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};