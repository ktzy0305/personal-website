"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";

const ToggleSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useTheme() || {};

  return (
    <Switch
      checked={isDarkMode}
      onCheckedChange={toggleDarkMode}
      aria-label="Toggle dark mode"
    />
  );
};

export default ToggleSwitch;
