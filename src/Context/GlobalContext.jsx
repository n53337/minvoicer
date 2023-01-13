import { createContext } from "react";

// const initValue = { user: "usef", page: "dashboard" };
const initValue = { user: null, page: null };
const data = { user: "usef", page: "dashboard" };

export const GlobalContext = createContext(initValue);

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
