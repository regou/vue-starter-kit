import HomeComponent from './components/home.component';
import UserComponent from './components/user.component';


const routes = {
	'/': {
		component: HomeComponent
	},
	'/user/:id': {
		component: UserComponent
	}
};

export default routes;
