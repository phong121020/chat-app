import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemesContext = createContext<ThemeContextType | undefined>(undefined)
