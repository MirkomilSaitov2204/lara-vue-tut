import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";
import Bookable from "./View/Bookable";

const routes = [
    {
        path: '/',
        component: ExampleComponent,
        name: "home"
    },
    {
        path: '/second',
        component: Example2,
        name: "second"
    },
    {
        path: '/bookable',
        component: Bookable,
        name: "bookable"
    }

]

const  router =new VueRouter({
    routes,
    mode: 'history'
})
export default router;
