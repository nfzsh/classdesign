module.exports = {
  publicPath: "./",
  devServer: {
    port: 8080,
    host: "localhost",
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true
      }
    }
  },
  pages: {
    login: {
      entry: "src/login/main.js",
      template: "src/login/login.html",
      filename: "login.html",
      title: "login Page",
      chunks: ["chunk-vendors", "chunk-common", "login"]
    },
    super_manager: {
      entry: "src/super_manager/main.js",
      template: "src/super_manager/super_manager.html",
      filename: "super_manager.html",
      title: "super_manager Page",
      chunks: ["chunk-vendors", "chunk-common", "super_manager"]
    }
  },
  productionSourceMap: false
};
