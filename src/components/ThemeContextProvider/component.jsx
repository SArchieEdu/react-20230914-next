"use client";

import React from "react";

export const ThemeContext = React.createContext("");

export const ThemeContextProvider = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value="theme">{children}</ThemeContext.Provider>
  );
};
