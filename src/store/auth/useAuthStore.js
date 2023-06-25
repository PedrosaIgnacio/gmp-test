import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user:{
    userType: null,
    username: null,
    userFirstName: null,
  },
  isLoggedIn: false,
  login: (user) => set(() => ({ isLoggedIn: true, user: user })),
  logout: () => set(() => ({isLoggedIn: false, user:{userType: null, username: null, userFirstName: null}}))
}))