const path = require('path');

module.exports = {
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"], /* which is what enables users to leave off the extension when importing */
        modules: ["./src", "node_modules"] /* Tell webpack what directories should be searched when resolving modules. */
    },
    entry: {
        cengage: [
            "./src/index.tsx"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules/
            }
        ],
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
    }
};