Структура проекта
Проект имеет следующую структуру файлов и директорий:
- /public
  - /images
    - images (1).jpeg
    - images.jpeg
    - blueSofa'.jpeg
    - sofa.jpeg
- /src
  - index.html
  - index.js
  - styles.css
- /dist
  - index.html
  - index.js
- webpack.config.js
- package.json

/public: Директория для хранения статических ресурсов, таких как изображения.
/src: Директория для исходных файлов проекта.
index.html: Главная HTML-страница приложения.
index.js: JavaScript-файл с логикой навигации и динамической загрузкой контента.
styles.css: Файл со стилями для внешнего вида приложения.
/dist: Директория, в которой генерируются собранные файлы проекта.

Зависимости:
Проект использует следующие зависимости, которые указаны в файле package.json:
"devDependencies": {
  "html-loader": "^1.3.2",
  "html-webpack-plugin": "^5.4.0",
  "style-loader": "^3.0.0",
  "css-loader": "^6.3.0",
  "webpack": "^5.55.0",
  "webpack-cli": "^4.8.0"
}

html-loader: Загрузчик HTML файлов для webpack.
html-webpack-plugin: Плагин для генерации HTML файлов на основе шаблонов.
style-loader и css-loader: Загрузчики стилей для обработки CSS файлов.
webpack и webpack-cli: Сам webpack и его интерфейс командной строки.

Настройки Webpack
Файл webpack.config.js содержит конфигурацию webpack для сборки проекта. Основные настройки включают:

entry: Определяет точку входа для сборки, в данном случае, ./src/index.js.
output: Определяет конечный файл и директорию для собранного проекта.
plugins: Включает плагин HtmlWebpackPlugin для генерации HTML файлов.
module.rules: Определяет загрузчики для разных типов файлов (HTML, CSS).

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
