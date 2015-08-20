var Vue = require('vue');

//组件里缺少完善的controller





var UserComponent = Vue.extend({
	template: `
		<div>
			<h1>Hi {{$route.params | json}} <span></span></h1>
		</div>
	`
});

export default UserComponent;