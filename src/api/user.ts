import type { UserLoginDTO, UserLoginVO, UserRegisterDTO, UserInfoVO } from '@/api/model/userModel';
import { request } from '@/utils/request';

const Api = {
  Login: '/api/v1/user/login',
  Register: '/api/v1/user/register',
  Logout: '/api/v1/user/logout',
  UserInfo: '/api/v1/user/info',
};

export function login(data: UserLoginDTO) {
  return request.post<UserLoginVO>({
    url: Api.Login,
    data,
  });
}

export function register(data: UserRegisterDTO) {
  return request.post<UserRegisterDTO>({
    url: Api.Register,
    data,
  });
}

export function logout() {
  return request.post({
    url: Api.Logout,
  });
}

export function getUserInfo() {
  return request.post<UserInfoVO>({
    url: Api.UserInfo,
  });
}
