import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import BlackPage from '../components/oarganizum/OrganizumHome.vue';
import BluePage from '../components/tour_booking/BluePage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/organizum', component: BlackPage },
  { path: '/tour_booking', component: BluePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
