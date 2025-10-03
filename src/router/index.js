import { createRouter, createWebHistory } from 'vue-router';

import Homepage from '@/views/Homepage.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Setting from '@/views/Setting.vue';
import Post from '@/views/Post.vue';
import Publish from '@/views/Publish.vue';
import ImageHosting from '@/views/ImageHosting.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    meta: { requiresAuth: false }
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false }
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/setting',
    name: 'Setting',
    component: Setting,
    meta: { requiresAuth: true }
  },
  {
    path: '/post/new',
    name: 'Publish',
    component: Publish,
    meta: { requiresAuth: true }
  },
  {
    path: '/post/:postId',
    name: 'Post',
    component: Post,
    meta: { requiresAuth: true }
  },
  {
    path: '/image',
    name: 'ImageHosting',
    component: ImageHosting,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = (localStorage.getItem('token') != null); // 检查本地存储中的 token

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;