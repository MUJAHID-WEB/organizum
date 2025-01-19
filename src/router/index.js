import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import OrganizumHome from '../components/oarganizum/OrganizumHome.vue';
import TourBookingHome from '../components/tour_booking/TourBookingHome.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/organizum', component: OrganizumHome },
  { path: '/tour_booking', component: TourBookingHome }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
