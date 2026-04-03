import { defineStore } from 'pinia';

import { getUserInfo, login as loginApi, logout as logoutApi } from '@/api/user';
import { t } from '@/locales';
import { usePermissionStore } from '@/store';
import type { UserInfo } from '@/types/interface';

const InitUserInfo: UserInfo = {
  name: '',
  roles: [],
};

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: { ...InitUserInfo },
  }),
  getters: {
    roles: (state) => {
      return state.userInfo?.roles;
    },
  },
  actions: {
    async login(userInfo: { account: string; password: string }) {
      const res = await loginApi(userInfo);
      this.token = res.token;
    },
    async getUserInfo() {
      const res = await getUserInfo();

      this.userInfo = {
        name: res.username,
        roles: [],
      };
    },
    async logout() {
      try {
        await logoutApi();
      } finally {
        this.token = '';
        this.userInfo = { ...InitUserInfo };
      }
    },
  },
  persist: {
    afterHydrate: () => {
      const permissionStore = usePermissionStore();
      permissionStore.initRoutes();
    },
    key: 'user',
    pick: ['token'],
  },
});
