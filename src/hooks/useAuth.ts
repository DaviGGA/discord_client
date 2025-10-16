import type { User, UserLogin, UserRegister, UserToken } from "@/types/user";
import { api, type Response } from "@/lib/api";

export function useAuth() {

  async function signup(userRegister: UserRegister) {
    const result = await api.post<Response<User>>("auth/register", userRegister);
    return result.data.data;
  }

  async function login(userLogin: UserLogin) {
    const result = await api.post<Response<UserToken>>("auth/login", userLogin);
    return result.data.data;
  }

  return { signup, login }

}