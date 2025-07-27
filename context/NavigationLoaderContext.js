"use client";
import React, { createContext, useContext, useState } from "react";

const NavigationLoaderContext = createContext();

export const useNavigationLoader = () => useContext(NavigationLoaderContext);

export const NavigationLoaderProvider = ({ children }) => {
  const [navigationLoading, setNavigationLoading] = useState(false);

  return (
    <NavigationLoaderContext.Provider value={{ navigationLoading, setNavigationLoading }}>
      {children}
    </NavigationLoaderContext.Provider>
  );
}; 