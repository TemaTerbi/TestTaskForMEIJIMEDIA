// module.exports = require('bootstrap-gulp');
const {watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
//config
const path = require("./config/path")
const app = require("./config/app")

//Задачи
const clear = require('./source/tasks/clear');
const pug = require('./source/tasks/pug');
const scss = require('./source/tasks/scss');
const js = require('./source/tasks/js');
const img = require('./source/tasks/img');
const fonts = require('./source/tasks/fonts');


//watcher change
const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload)
  watch(path.scss.watch, scss).on("all", browserSync.reload)
  watch(path.js.watch, js).on("all", browserSync.reload)
  watch(path.img.watch, img).on("all", browserSync.reload)
  watch(path.fonts.watch, fonts).on("all", browserSync.reload)
}

exports.pug = pug; 
exports.css = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;

//server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}

const build = series(
  clear,
  parallel(pug, scss, js, img, fonts),
);

const dev = series(
  build,
  parallel(watcher, server)
);

//Сборка
exports.default = app.isProd ? build : dev;



