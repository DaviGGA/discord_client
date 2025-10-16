export type User = {
  id: string,
  email: string,
  password: string
}

export type UserRegister = 
  Omit<User, "id"> &
  { confirmPassword: string }

export type UserLogin = Omit<User, "id">;

export type UserToken = { data: string }

