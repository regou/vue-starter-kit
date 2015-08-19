var Vue = require('vue');
var Router = require('vue-router');
var routes = require('./routes');

var Main = Vue.extend({//Root Component

});



Vue.use(Router);

module.exports = function bootstrap() {
	const router = new Router();
	router.map(routes);
	router.start(Main, '#app');
};

