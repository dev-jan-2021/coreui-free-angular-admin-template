export interface User {
  $key?: string,
  name: string,
  email: string,
  password: string,
  createdOn: string,
  isAdmin: Number,
  isActive: Number
}
