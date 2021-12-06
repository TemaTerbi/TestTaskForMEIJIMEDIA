// module.exports = require('bootstrap-gulp');
const {src, dest } = require("gulp");
//config
const path = require("../../config/path")
const app = require("../../config/app")


//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const fileInclude = require("gulp-file-include")
const htmlmin = require("gulp-htmlmin")



//Обработка html
const html = () => {
 return src(path.html.src)
  .pipe(plumber({
    errorHandler: notify.onError()
  }))
  .pipe(fileInclude())
  .pipe(htmlmin(app.htmlmin))
  .pipe(dest(path.html.dest))
}

module.exports = html;