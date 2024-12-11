module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.sass"`,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title =
        'Modelamiento y gestión de datos para modelos de inteligencia artificial'
      return args
    })
  },
}
