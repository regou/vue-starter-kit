var HomeComponent = require('./components/HomeComponent');
var UserComponent = require('./components/UserComponent');




const routes = {
	'/': {
		component: HomeComponent
	},
	'/user/:id': {
		component: UserComponent
	}
};

export default routes;
