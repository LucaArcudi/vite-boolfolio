import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ContactMe from './pages/ContactMe.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMe
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: SingleProject
        },
    ]
});

export { router };