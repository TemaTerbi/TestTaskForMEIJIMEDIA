// module.exports = require('bootstrap-gulp');
const {watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
//config
const path = require("./config/path")

//Задачи
const clear = require('./source/tasks/clear');
const pug = require('./source/tasks/pug');
const scss = require('./source/tasks/scss');


//watcher change
const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload)
  watch(path.scss.watch, scss).on("all", browserSync.reload)
}

exports.pug = pug;
exports.css = scss;

//server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}


//Сборка
exports.dev = series(
  clear,
  parallel(pug, scss),
  parallel(watcher, server)
);


