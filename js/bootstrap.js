import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
Vue.use(Router);

export default function bootstrap(RootComponent) {
	const router = new Router();
	router.map(routes);
	router.start(RootComponent, '#app');
}
