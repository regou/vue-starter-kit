import component from 'vue-class-component';

@component
export default class UserComponent {

	static template = `
		<div>
			<h1>Yo {{route.params.name}} <span v-if="!route.params.name">Human</span></h1>
		</div>
	`
}
