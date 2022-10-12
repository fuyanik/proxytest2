const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/create-payment-intent", { target: "http://localhost:4242/" }));
};
