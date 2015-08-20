import HomeComponent from './components/HomeComponent';
import UserComponent from './components/UserComponent';


const routes = {
	'/': {
		component: HomeComponent
	},
	'/user/:id': {
		component: UserComponent
	}
};

export default routes;
