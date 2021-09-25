const path = require('path');

module.exports = {
        
    entry: "./src/client.js",
    
    output: {
        filename: 'viewer.js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },  
    
    resolve: {
        fallback: {
            "path": require.resolve('path-browserify'),
        }
    }
}
