import VueRouter from "vue-router";
import router from "./router";
import Index from "./index"

require('./bootstrap');
window.Vue = require('vue').default;

Vue.use(VueRouter)


const app = new Vue({
    el: '#app',
    router,
    components: {
        index: Index
    }
});
