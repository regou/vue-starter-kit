import component from 'vue-class-component';

//组件里缺少完善的controller


@component
export default class UserComponent {

	static template = `
		<div>
			<h1>Hi {{$route.params | json}} <span></span></h1>
		</div>
	`
}
