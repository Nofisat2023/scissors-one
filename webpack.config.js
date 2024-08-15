const { resolve } = require("path");
const { Extension } = require("typescript");

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use:'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
    extension: ['.tsx', '.ts', '.js'],
    }
}