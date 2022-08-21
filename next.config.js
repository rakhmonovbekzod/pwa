const withPWA = require('next-pwa')

module.exports = withPWA({
  reactSrtictMode:true,
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  }
})