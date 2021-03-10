
const path = require('path') // Orquestrador dos caminhos dos arquivos

module.exports = {
  mode: 'development',
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
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  }
};