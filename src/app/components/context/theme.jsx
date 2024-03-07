"use client";
import React, { createContext, useState } from "react";
export const themeContext = createContext();
export default function Theme({ children }) {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return <themeContext.Provider value={{ toggle,mode }}>
  <div className={`theme ${mode}`}>
  {children}
    
  </div>
    </themeContext.Provider>;
}
