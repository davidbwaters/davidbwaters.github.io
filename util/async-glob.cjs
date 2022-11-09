const glob = require('glob');
module.exports.syncGlob = glob.sync;
module.exports.asyncGlob = async function asyncGlob(pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, {}, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};
