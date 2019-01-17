const Bundler = require('parcel-bundler');
const Path = require('path');

const entryFiles = Path.join(__dirname, './index.html');

//process.env.NODE_ENV = 'production';

const options = {
  outDir: './dist', // The out directory to put the build files in, defaults to dist
  outFile: 'index.html', // The name of the outputFile
};

(async function() {
  const bundler = new Bundler(entryFiles, options);

  bundler.addAssetType(".nim", require.resolve("../NimAsset.js"))
  const bundle = await bundler.bundle();
})();
