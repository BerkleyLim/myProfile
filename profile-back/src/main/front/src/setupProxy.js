// 참조 : https://transferhwang.tistory.com/411
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //target: "http://localhost:8080",
      target: "http://35.90.180.8:8080",
      changeOrigin: true,
      ws: true
    })
  )
} 