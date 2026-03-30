"use client";

import { Button as BaseButton } from "baseui/button";
import { useTheme as useBaseTheme } from "next-themes";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { THEME_COLOR } from "@/app";
import { resolveStateAction } from "@/lib/utils";

export function useTheme() {
  const { resolvedTheme, setTheme: setBaseTheme } = useBaseTheme();
  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);

  const setMetaColor = useCallback((color: string) => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) metaTag.setAttribute("content", color);
  }, []);

  const setTheme = useCallback(
    (state: React.SetStateAction<string>) => {
      setBaseTheme((prev) => {
        const newState = resolveStateAction(state, prev);
        const isDark = newState === "dark";
        const color = isDark ? THEME_COLOR.dark : THEME_COLOR.light;
        setMetaColor(color);
        return newState;
      });
    },
    [setBaseTheme, setMetaColor],
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    setMetaColor(isDark ? THEME_COLOR.dark : THEME_COLOR.light);
  }, [isDark, setMetaColor]);

  return { theme: resolvedTheme, isDark, setTheme, toggleTheme };
}

export function ThemeToggle({ ...props }: ThemeToggle.Props) {
  const { toggleTheme } = useTheme();
  return <BaseButton onClick={toggleTheme} {...props} />;
}
export namespace ThemeToggle {
  export type Props = BaseButton.Props;
}
