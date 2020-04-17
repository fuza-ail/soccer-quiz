import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ListPlayer from '../views/ListPlayer.vue';
import Quiz from '../views/Quiz.vue';
import Win from '../views/Win.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/listPlayer',
    name: 'ListPlayer',
    component: ListPlayer,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/win',
    name: 'Win',
    component: Win,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
