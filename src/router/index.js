import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TaskPage from '../views/TaskPage.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/tasks', component: TaskPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
