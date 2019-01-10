module.exports = function(bundler) {
  bundler.addAssetType('nim', require.resolve('./NimAsset'))
}
