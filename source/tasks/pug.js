// module.exports = require('bootstrap-gulp');
const {src, dest} = require("gulp");
//config
const path = require("../../config/path")

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const pugs = require("gulp-pug")




//Обработка PUG
const pug = () => {
 return src(path.pug.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "Pug",
      message: error.message 
    }))
  }))
  .pipe(pugs())
  .pipe(dest(path.pug.dest)) 
}

module.exports = pug;