"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
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
  const router = useRouter();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    router.push("/?cat=1&subcat=1");
  }, [router]);

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
