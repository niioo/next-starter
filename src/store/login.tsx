import { create } from 'zustand'

interface LoginState {
  email: string
  password: string
  setEmail: (username: string) => void
  setPassword: (password: string) => void
}

export const useLoginStore = create<LoginState>((set) => ({
  email: '',
  password: '',
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
}))
