require('./bootstrap');

window.Vue = require('vue');

Vue.component('posts', require('./components/PostsComponent.vue').default);
Vue.component('single_post', require('./components/PostComponent.vue').default);

const app = new Vue({
    el: '#app'
});
