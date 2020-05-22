'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 8080 // dev port

module.exports = {
  // chainWebpack(config) { // 本宝用来调试代码
  //   config.optimization.minimize(false)
  // },
  runtimeCompiler: true,
  // publicPath: process.env.NODE_ENV === 'production' ? '/steambuy' : './',
  publicPath: './',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    inline: true,
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://1.1.1.1:1111',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }

  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // css相关配置
  css: {
    // 启用 CSS modules
    requireModuleExtension: true,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {},
      less: {
        lessOptions: {
          modifyVars: {
            'blue': '#1677FE',
            'button-large-height': '40px',
            'tabs-card-height': 'margint: 0',
            'van-button--info': '#1677fe'
            // hack: `@import ${resolve('src/assets/css/vant.less')};`
          }
        }
      },
      postcss: {
        plugins: [
          require('postcss-px2vw')({
            viewportWidth: 375
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // 设置svg雪碧图
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // 设置预加载白屏
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config.when(process.env.NODE_ENV === 'development', config =>
      config.devtool('cheap-source-map')
    )
    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      // config.optimization.splitChunks({
      //   chunks: 'all',
      //   cacheGroups: {
      //     libs: {
      //       name: 'chunk-libs',
      //       test: /[\\/]node_modules[\\/]/,
      //       priority: 10,
      //       chunks: 'initial' // only package third parties that are initially dependent
      //     },
      //     vue: {
      //       name: 'chunk-vue', // split elementUI into a single package
      //       priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
      //       test: /[\\/]node_modules[\\/]_?vue(.*)/ // in order to adapt to cnpm
      //     },
      //     iscroll: {
      //       name: 'chunk-iscroll', // split elementUI into a single package
      //       priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
      //       test: /[\\/]node_modules[\\/]_?iscroll(.*)/ // in order to adapt to cnpm
      //     },
      //     commons: {
      //       name: 'chunk-commons',
      //       test: resolve('src/components'), // can customize your rules
      //       minChunks: 1, //  minimum common number
      //       priority: 5,
      //       reuseExistingChunk: true
      //     }
      //   }
      // })
      config.optimization.runtimeChunk('single')
    })
  }
}
