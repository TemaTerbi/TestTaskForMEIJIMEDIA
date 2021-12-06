const del = require("del");
//config
const path = require("../../config/path")

//delete trash file
const clear = () => {
  return del(path.root);
}

module.exports = clear;