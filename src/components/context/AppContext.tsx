"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface AppContextValues {
  isSettingsOpen: boolean;
  setIsSettingsOpen: Dispatch<SetStateAction<boolean>>;
  isCategoryOpen: boolean;
  setCategoryOpen: Dispatch<SetStateAction<boolean>>;
}

// Set default values for from and to
const defaultValues: AppContextValues = {
  isSettingsOpen: false,
  setIsSettingsOpen: () => {},
  isCategoryOpen: false,
  setCategoryOpen: () => {},
};

export const appContext = createContext<AppContextValues>(defaultValues);

const AppContext = ({ children }: { children: ReactNode }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  return (
    <appContext.Provider
      value={{
        isSettingsOpen,
        setIsSettingsOpen,
        isCategoryOpen,
        setCategoryOpen,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
