var Vue = require('vue');


var SideNavConstructor = Vue.extend({
    props:["users"],
    template: '<aside class="am-u-sm-4">\n    <ul class="am-nav">\n        <li>\n            <a v-link="/">Login</a>\n        </li>\n        <li v-repeat="users" class="user-{{id}}">\n            <a v-link="/user/{{id}}">{{$index}} - {{name}}</a>            \n        </li>\n    </ul>\n</aside>'
});

Vue.component('side-nav', SideNavConstructor);