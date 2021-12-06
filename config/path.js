const pathSrc = "./source";
const pathDest = "./dist"

module.exports = {
  root: pathDest,


  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/*.html",
    dest: pathDest
  },

  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/*.pug",
    dest: pathDest
  },

  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/*.css",
    dest: pathDest
  },

  scss: {
    src: pathSrc + "/scss/*.{sass,scss}",
    watch: pathSrc + "/scss/*.{sass,scss}",
    dest: pathDest
  },
}