/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce102d77dceb33576465240a94d411c9"
  },
  {
    "url": "annotations.html",
    "revision": "df036e24ba62748f8f798a9e3dd73535"
  },
  {
    "url": "assets/css/0.styles.12f75f35.css",
    "revision": "804ea70da9affe96036f9c24fced917a"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.5f71d4e0.js",
    "revision": "0c0ec91d9ef05f97dd0e89e6e7570d1a"
  },
  {
    "url": "assets/js/11.e55a1df4.js",
    "revision": "5745c8cd05034d0d213fc97b125104d6"
  },
  {
    "url": "assets/js/12.04894dc4.js",
    "revision": "c99cfac67b28ab7fa2d69806f7174115"
  },
  {
    "url": "assets/js/13.9855fe0b.js",
    "revision": "7e6235f30e74ab986c38f45cddb7f754"
  },
  {
    "url": "assets/js/14.19995241.js",
    "revision": "685846c68b0b7a38eaafc1d19b5494f6"
  },
  {
    "url": "assets/js/15.ae45480b.js",
    "revision": "364f99826344f09b1e06f78a0ea59a9e"
  },
  {
    "url": "assets/js/16.c48cd773.js",
    "revision": "5d0eebb7e2a203932d846fe6ea2ae1fc"
  },
  {
    "url": "assets/js/17.aac23d1d.js",
    "revision": "b2369ac95bbf4006efeed52fef0d8da6"
  },
  {
    "url": "assets/js/18.ba3bbc96.js",
    "revision": "add0d6c4939f4be34a74d2dac5261319"
  },
  {
    "url": "assets/js/19.5f01507f.js",
    "revision": "32acb559e74c0572583efc89e9c9b92f"
  },
  {
    "url": "assets/js/2.ab57128e.js",
    "revision": "ba451933d5e22ba6a4d2f555b5dfe670"
  },
  {
    "url": "assets/js/20.dc416989.js",
    "revision": "a4a17fdd90ccd56ecf75d412d95082c3"
  },
  {
    "url": "assets/js/21.9c01ab55.js",
    "revision": "68b6b6db07a6fb0de1b3c8954358b0c4"
  },
  {
    "url": "assets/js/22.730c95c0.js",
    "revision": "f91c01ec0097cb0bff80fc784b52d9cd"
  },
  {
    "url": "assets/js/23.85b8787d.js",
    "revision": "7749ec6c2b1ef846a7dc40956a55c1e9"
  },
  {
    "url": "assets/js/24.34f00647.js",
    "revision": "a80f708e817ef77ff2624fa0cc768197"
  },
  {
    "url": "assets/js/25.2ac38491.js",
    "revision": "b97e25e572694f43b0400fdc59c6ba4f"
  },
  {
    "url": "assets/js/26.dba59441.js",
    "revision": "75d9631cad38a7f4cf4773a3a6701dfc"
  },
  {
    "url": "assets/js/3.48469004.js",
    "revision": "fa5fe17d6d68f9695a55427e7be3f193"
  },
  {
    "url": "assets/js/4.031e9d49.js",
    "revision": "0e527dfb88cad497c83796bd9fa2f76c"
  },
  {
    "url": "assets/js/5.c2aa3cf6.js",
    "revision": "78c846ee6169769b75d7f2115011d925"
  },
  {
    "url": "assets/js/6.c07319d3.js",
    "revision": "0d65c98e84d4d7138dbb983f7cd4ff11"
  },
  {
    "url": "assets/js/7.f5776ab4.js",
    "revision": "c5501e96cf881b9c9276a82c1bced3ab"
  },
  {
    "url": "assets/js/8.04a6e67f.js",
    "revision": "4951536f70da24eb7216c6f2c8b9e3ef"
  },
  {
    "url": "assets/js/9.2db597f1.js",
    "revision": "4bb76281d8fa5e5e8bd920a2acbf4803"
  },
  {
    "url": "assets/js/app.7e55ca1d.js",
    "revision": "d34dc3c743b92528178ff09e24dd4f59"
  },
  {
    "url": "authentication.html",
    "revision": "faaae5119662c287c764b4747745aacc"
  },
  {
    "url": "decorators.html",
    "revision": "6eb67caa13ba816ce6ffb957f871f02b"
  },
  {
    "url": "descriptions.html",
    "revision": "0c38c905da1929a0739381f69057197e"
  },
  {
    "url": "di.html",
    "revision": "77000bcd15775dceabacccc18ec396bf"
  },
  {
    "url": "error-handling.html",
    "revision": "603713fa6c723be4a155d8126eaae5b8"
  },
  {
    "url": "examples.html",
    "revision": "2938ef248ad87ad8cba84f5ea8e4e262"
  },
  {
    "url": "faq.html",
    "revision": "8c8cf754c5d3e9c0da39ec510706e274"
  },
  {
    "url": "file-upload.html",
    "revision": "00364134e42bbe6ff8bb431e4a3eceb3"
  },
  {
    "url": "generating.html",
    "revision": "210532a4bfa2ef2f28a1f21f08b2bddb"
  },
  {
    "url": "getting-started.html",
    "revision": "60568202bd9f51d83edd6480b79d4297"
  },
  {
    "url": "index.html",
    "revision": "c023826adec51a77520116ef2304cb9a"
  },
  {
    "url": "introduction.html",
    "revision": "1224a6c08e40ab3b71805bb0d1ada41f"
  },
  {
    "url": "live-reloading.html",
    "revision": "aadeddd20430011f9b94cb6e98c5fd9a"
  },
  {
    "url": "path-mapping.html",
    "revision": "c2ce8cf01e71f273a39177434150fe4b"
  },
  {
    "url": "routes.html",
    "revision": "27aa53e22cdfe82a16a674689825a37f"
  },
  {
    "url": "templates.html",
    "revision": "a9c51d71ff980f5cb56b17aa0932b3f3"
  },
  {
    "url": "upgrading.html",
    "revision": "626643c7dfa38cf829dbe92087123702"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
