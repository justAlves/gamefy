import { create } from "zustand";

type TSidebar = {
    toggle: boolean;
    setToggle: () => void
}

export const useSidebar = create<TSidebar>(set => ({
    toggle: true,
    setToggle: () => set((state) => ({toggle: !state.toggle}))
}))