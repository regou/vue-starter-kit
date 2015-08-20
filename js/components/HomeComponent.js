var Vue = require('vue');




var HomeComponent = Vue.extend({
	data: function () {
		return {
			name:'wxwx'
		}
	},
	template: '<div class="am-input-group">\n    <span class="am-input-group-label"><i class="am-icon-user am-icon-fw"></i></span>\n    <input v-model="name" type="text" class="am-form-field" placeholder="Username">\n</div>\n\n<div class="am-input-group">\n    <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>\n    <input v-model="psw" type="text" class="am-form-field" placeholder="Password">\n</div>\n\n<button v-if="name && psw" type="button" class="am-btn am-btn-primary">submit</button>\n<button v-if="!(name && psw)" type="button" class="am-btn am-btn-primary" disabled="disabled">submit</button>'
});

export default HomeComponent;