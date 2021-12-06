// module.exports = require('bootstrap-gulp');
const {src, dest} = require("gulp");
//config
const path = require("../../config/path")
const app = require("../../config/app")

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const imagemin = require("gulp-imagemin")
const newer = require("gulp-newer")
const gulif = require("gulp-if")






//Обработка IMG
const img = () => {
 return src(path.img.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "img",
      message: error.message 
    }))
  }))
  .pipe(newer(path.img.dest))
  .pipe(gulif(app.isProd, imagemin(app.imagemin)))
  .pipe(dest(path.img.dest)) 
}

module.exports = img;