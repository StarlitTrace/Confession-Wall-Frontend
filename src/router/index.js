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
    meta: {
      title: '首页',
      requiresAuth: false
    }
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '用户注册',
      requiresAuth: false
    }
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '用户登录',
      requiresAuth: false
    }
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '个人主页',
      requiresAuth: true
    }
  },
  {
    path: '/user/setting',
    name: 'Setting',
    component: Setting,
    meta: {
      title: '用户设置',
      requiresAuth: true
    }
  },
  {
    path: '/post/new',
    name: 'Publish',
    component: Publish,
    meta: {
      title: '新建表白',
      requiresAuth: true
    }
  },
  {
    path: '/post/:postId',
    name: 'Post',
    component: Post,
    meta: {
      title: '首页',
      requiresAuth: true
    }
  },
  {
    path: '/image',
    name: 'ImageHosting',
    component: ImageHosting,
    meta: {
      title: '图床',
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + '- 表白墙';
  } else {
    document.title = '默认标题';
  }

  const isAuthenticated = (localStorage.getItem('token') != null); // 检查本地存储中的 token

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;