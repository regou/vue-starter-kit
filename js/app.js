import Vue from 'vue';
import Router from 'vue-router';
import component from 'vue-class-component';
import HomeComponent from './components/home.component';
import UserComponent from './components/user.component';

Vue.use(Router);

@component
class App {
    static template = `
        <div>
            <router-view></router-view>
        </div>
    `
}

const router = new Router();
router.map({
	'/': {
		component: HomeComponent
	},
	'/users/:name': {
		component: UserComponent
	}
});

router.start(App, '#app');
