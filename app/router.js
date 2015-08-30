 var router;

 module.exports = {
  makePath(to, params, query) {
    return router.makePath(to, params, query);
  },

  makeHref(to, params, query) {
    return router.makeHref(to, params, query);
  },

  transitionTo(to, params, query) {
    console.log('transitionTo called with to: ', to, ' params: ', params);
    router.transitionTo(to, params, query);
  },

  replaceWith(to, params, query) {
    router.replaceWith(to, params, query);
  },

  goBack() {
    router.goBack();
  },

  run(render) {
    router.run(render);
  }
};

// By the time route config is require()-d,
// require('./router') already returns a valid object

var Router = require('react-router');
var routes = require('./routes.js');

router = Router.create({
  routes: routes,
});