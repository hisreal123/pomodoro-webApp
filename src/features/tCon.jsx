import { createContext, useState, useContext } from "react";

// Create a theme context
export const tCon = createContext({});

// Custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(tCon);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("#0b5c53"); // Initial theme


  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <tCon.Provider value={{ theme, changeTheme }}>
      {children}
    </tCon.Provider>
  );
};
