import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  dark: boolean;
  activeUserId: string | null;
  preferences: Record<string, boolean>;
  setUser: (userId: string | null) => void;
  toggle: () => void;
}

export const useThemeStore = create<State>()(
  persist(
    (set) => ({
      dark: false,
      activeUserId: null,
      preferences: {},

      setUser: (userId) =>
        set((state) => ({
          activeUserId: userId,
          dark: userId
            ? (state.preferences[userId] ?? false)
            : false,
        })),

      toggle: () =>
        set((state) => {
          if (!state.activeUserId) return state;

          const nextDark = !state.dark;

          return {
            dark: nextDark,
            preferences: {
              ...state.preferences,
              [state.activeUserId]: nextDark,
            },
          };
        }),
    }),
    {
      name: "hirenest-theme",
    }
  )
);