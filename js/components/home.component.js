var Vue = require('vue');
import component from 'vue-class-component';

//@component
//export default class HomeComponent {
//    name = 'John Doe';
//    static template = `
//    <div>
//        <input v-model="name">
//        <h3>Hello {{name}}<span v-if="!name">Human</span> </h3>
//        <br />
//        <br />
//
//        <div v-if="name">
//            <a href="/#!/users/{{{name}}}">Goto Profile</a>
//        </div>
//    </div>
//    `
//}


var HomeComponent = Vue.extend({
	data: function () {
		return {
			name:'wxwx'
		}
	},
	template: '<div class="am-input-group">\n    <span class="am-input-group-label"><i class="am-icon-user am-icon-fw"></i></span>\n    <input v-model="name" type="text" class="am-form-field" placeholder="Username">\n</div>\n\n<div class="am-input-group">\n    <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>\n    <input v-model="psw" type="text" class="am-form-field" placeholder="Password">\n</div>\n\n<button v-if="name && psw" type="button" class="am-btn am-btn-primary">submit</button>\n<button v-if="!(name && psw)" type="button" class="am-btn am-btn-primary" disabled="disabled">submit</button>'
});

export default HomeComponent;