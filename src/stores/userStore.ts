import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import request from '@/utils/request';

// 注册信息
interface RegisterInfo {
  username: string;
  password: string;
  nickname: string;
}

// 注册请求返回值
interface RegisterResponse {
  code: number;
  msg: string;
  token: number;
}

// 登录信息
interface LoginInfo {
  username: string;
  password: string;
}

// 登录请求返回值
interface LoginResponse {
  code: number;
  data?: {
    user_id: number;
    token: string;
  };
  msg: string;
}

// 用户信息
interface UserProfile {
  avatar: string | null;
  user_id: number;
  nickname: string;
  username: string;
}

export const useUserStore = defineStore('user', () => {
  // 状态
  const token = ref<string | null>(null);
  const userInfo = ref<UserProfile | null>(null);

  // 计算属性：判断是否已登录
  const isLoggedIn = computed(() => {
    return token.value !== null && token.value !== '';
  });

  // 注册方法
  const register = async (registerInfo: RegisterInfo) => {
    try {
      const response = await request.post('/api/auth/register', registerInfo);
      return {
        success: true,
        data: response.data,
        message: response.data.msg || '注册成功'
      };
    } catch (error: any) {
      console.error('注册失败:', error);
      return {
        success: false,
        data: null,
        message: error.response?.data?.message || '注册失败，请重试'
      };
    }
  };

  // 登录方法
  const login = async (loginInfo: LoginInfo) => {
    try {
      const response = await request.post<LoginResponse>('/api/auth/login', loginInfo);

      // 保存 token 和用户信息
      token.value = response.data.data.token;
      localStorage.setItem('token', token.value);
      await fetchUserInfo();

      return {
        success: true,
        data: response.data
      };
    } catch (error: any) {
      console.error('登录失败:', error);
      return {
        success: false,
        message: error.response?.data?.message || '登录失败，请重试'
      };
    }
  };

  // 登出方法
  const logout = () => {
    // 清除状态
    token.value = null;
    userInfo.value = null;
    
    // 清除 localStorage 中的数据
    localStorage.removeItem('token');
    localStorage.removeItem('user-store');
  };

  // 获取用户信息
  const fetchUserInfo = async () => {
    if (!token.value) return;

    try {
      const response = await request.get('/api/user/profile');

      if (response.data.code === 401) {
        logout();
        return { success: false, message: response.data.msg };
      }

      userInfo.value = response.data;
      return {
        success: true,
        data: response.data
      };
    } catch (error: any) {
      console.error('获取用户信息失败:', error);
      // 如果token无效，清除登录状态
      if (error.response?.status === 401) {
        logout();
      }
      return { success: false, message: '获取用户信息失败' };
    }
  };

  // 初始化：从 localStorage 恢复 token
  const initAuth = () => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      token.value = savedToken;
      fetchUserInfo();
    }
  };

  return {
    // 状态
    token,
    userInfo,
    // 计算属性
    isLoggedIn,
    // 方法
    login,
    register,
    logout,
    fetchUserInfo,
    initAuth
  };
}, {
  persist: true
});