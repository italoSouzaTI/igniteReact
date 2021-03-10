const path = require('path') // Orquestrador dos caminhos dos arquivos

const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //O arquivo principal da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'),// Caminho de saida dos arquivos convertidos
        filename: 'bundle.js'
    },
    //Quais formatos nossa aplicação pode ler
    resolve: {
        extensions: ['.js', '.jsx'],

    },
    // lidando com cada tipo de arquivo
    module: {
        rules: [
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};