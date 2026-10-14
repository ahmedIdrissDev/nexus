import { Box, Layers, LayoutDashboard } from "lucide-react";
import React from "react";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export const button: NavigationItem[] = [
  {
    label: "dashboard",
    icon: <LayoutDashboard />,
    path: "/",
  },
  {
    label: "Porduct",
    icon: <Box />,
    path: "/",
  },
  {
    label: "Library",
    icon: <Layers />,
    path: "/",
  },
];
