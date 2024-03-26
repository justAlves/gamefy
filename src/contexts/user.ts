import { User } from 'firebase/auth'
import {create} from 'zustand'

type TUser = User

type TActions = {
    setUser: (user: TUser) => void
}

type TUserStore = {
    store: {
        user: TUser | null
    },
    actions: TActions
}

export const useUserStore = create<TUserStore>((set) => ({
    store: {
        user: null
    },
    actions: {
        setUser: (user: TUser) => set({store: {user}})
    }
}))