"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const ToggleSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // One-time mount flag so the toggle reflects the real (client-resolved)
  // theme without a hydration mismatch; the single sync render is intentional.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      checked={mounted ? isDark : false}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      aria-label="Toggle dark mode"
      disabled={!mounted}
    />
  );
};

export default ToggleSwitch;
