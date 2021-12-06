// module.exports = require('bootstrap-gulp');
const {src, dest} = require("gulp");
//config
const path = require("../../config/path")
const app = require("../../config/app")

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const babel = require("gulp-babel")
const webPackStream = require("webpack-stream")






//Обработка JS
const js = () => {
 return src(path.js.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "js",
      message: error.message 
    }))
  }))
  .pipe(babel())
  .pipe(webPackStream(app.webpack))
  .pipe(dest(path.js.dest)) 
}

module.exports = js;