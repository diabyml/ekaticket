"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@nextui-org/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => console.log(theme), [theme]);

  if (!mounted) return null;

  return (
    <>
      <Button
        isIconOnly
        onClick={() => {
          console.log("theme:", theme);
          setTheme(theme === "light" ? "dark" : "light");
        }}
        aria-label="Toggle theme"
        variant="ghost"
        size="sm"
      >
        {theme === "light" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </Button>
    </>
  );
}
