// 注册信息
export interface RegisterRequest {
  username: string;
  password: string;
  nickname: string;
}

// 注册请求返回值
export interface RegisterResponse {
  code: number;
  msg: string;
  token: number;
}

// 登录信息
export interface LoginRequest {
  username: string;
  password: string;
}

// 登录请求返回值
export interface LoginResponse {
  code: number;
  data?: {
    user_id: number;
    token: string;
  };
  msg: string;
}

// 用户信息
export interface UserProfile {
  avatar: string | null;
  user_id: number;
  nickname: string;
  username: string;
}

// 获取指定用户信息返回值
export interface UserByIdResponse {
  code: number;
  data?: {
    avatar: string | null;
    nickname: string;
    user_id: number;
  };
  msg: string;
}

// 修改昵称
export interface UpdateNicknameRequest {
  nickname: string;
}

// 修改昵称返回值
export interface UpdateNicknameResponse {
  code: number;
  data?: {
    avatar: string | null;
    nickname: string;
    user_id: number;
  };
  msg: string;
}

// 修改密码
export interface UpdatePasswordRequest {
  old_password: string;
  new_password: string;
}

// 修改密码返回值
export interface UpdatePasswordResponse {
  code: number;
  msg: string;
  token?: string;
}

// 上传头像返回值
export interface UploadAvatarResponse {
  code: number;
  data: {
    avatar: string;
  };
  msg: string;
}

// 拉黑用户
export interface BlockUserRequest {
  user_id: number;
}

// 拉黑用户返回值
export interface BlockUserResponse {
  code: number;
  msg: string;
  token?: string;
}

// 取消拉黑用户返回值
export interface UnblockUserResponse {
  code: number;
  msg: string;
  token?: string;
}

// 获取拉黑列表返回值
export interface BlacklistResponse {
  code: number;
  data: {
    userList: Array<{
      user_id: number;
      username: string;
      nickname: string;
      password: string;
      avatar: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
  };
  total: string;
}