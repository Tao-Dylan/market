module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'newwork': '@/newwork',
        'views': '@/views',
      }
    }
  }
}

// const path = require('path')
// function resolve(dir) {
//  return path.join(__dirname, dir)
// }
// module.exports = {
//  lintOnSave: true,
//  chainWebpack: config => {
//   config.resolve.alias
//   //  .set('@', resolve('src'))
//    .set('assets', resolve('src/assets'))
//    .set('common', resolve('src/common'))
//    .set('components', resolve('src/components'))
//    .set('newwork', resolve('src/newwork'))
//    .set('views', resolve('src/views'))
//  }
// }

