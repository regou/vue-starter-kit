var Vue = require('vue');
var Router = require('vue-router');
var routes = require('./routes');

Vue.use(Router);

module.exports = function bootstrap(RootComponent) {
	const router = new Router();
	router.map(routes);
	router.start(RootComponent, '#app');
};

