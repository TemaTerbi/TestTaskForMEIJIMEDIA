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
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest
  },

  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/*.css",
    dest: pathDest
  },

  scss: {
    src: pathSrc + "/scss/*.{sass, scss}",
    watch: pathSrc + "/scss/**/*.{sass, scss}",
    dest: pathDest
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest
  },

  img: {
    src: pathSrc + "/img/**/*.{png, jpeg, jpg, gif, svg}",
    watch: pathSrc + "/img/**/*.{png, jpeg, jpg, gif, svg}",
    dest: pathDest + "/img"
  },

  fonts: {
    src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/fonts"
  },
}