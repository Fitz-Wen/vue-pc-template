module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    // 设置代理
    hot: true, //热加载
    // host: '0.0.0.0', //ip地址
    // open: true, //自动打开浏览器
    proxy: {
      '/api': {
        //本地
        target: 'http://192.168.102.13:8080/',
        // 如果要代理 websockets
        ws: true,
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
};
