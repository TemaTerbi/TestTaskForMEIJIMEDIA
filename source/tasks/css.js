// module.exports = require('bootstrap-gulp');
const {src, dest} = require("gulp");
//config
const path = require("../../config/path")

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const concat = require("gulp-concat")





//Обработка CSS
const css = () => {
 return src(path.css.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "css",
      message: error.message 
    }))
  }))
  .pipe(concat("style.css"))
  .pipe(dest(path.css.dest)) 
}

module.exports = css;