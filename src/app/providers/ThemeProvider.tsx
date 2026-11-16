import { useEffect } from "react";
import type { ReactNode } from "react";

import { useAuthStore } from "../store/authStore";
import { useThemeStore } from "../store/themeStore";

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const userId = useAuthStore((s) => s.user?.id ?? null);

  const dark = useThemeStore((s) => s.dark);
  const setUser = useThemeStore((s) => s.setUser);

  useEffect(() => {
    setUser(userId);
  }, [userId, setUser]);

  useEffect(() => {
    document.documentElement.dataset.theme =
      userId && dark ? "dark" : "light";
  }, [userId, dark]);

  return <>{children}</>;
}