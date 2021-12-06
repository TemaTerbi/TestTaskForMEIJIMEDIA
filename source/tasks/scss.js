// module.exports = require('bootstrap-gulp');
const {src, dest} = require("gulp");
//config
const path = require("../../config/path")

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const sass = require("gulp-sass")(require("sass"))






//Обработка SCSS
const scss = () => {
 return src(path.scss.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "scss",
      message: error.message 
    }))
  }))
  .pipe(sass())
  .pipe(dest(path.scss.dest)) 
}

module.exports = scss;