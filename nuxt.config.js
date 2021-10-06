export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'currency-converter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios', ssr: false },
    { src: '~/plugins/glide', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-svg-loader',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // prefix: '/api/v1',
    // port: '80',
    // proxy: true
  },

  // proxy: {
  //   // '/api/': 'http://backend.test'
  // },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    },
    transpile: [
      '@reststate/vuex',
      '@reststate/client',
    ]
  }
}
