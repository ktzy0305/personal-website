import { createContext } from "react";

export const LayoutContext = createContext({
  navbarHeight: 0,
  setNavbarHeight: (height: number) => {},
});
