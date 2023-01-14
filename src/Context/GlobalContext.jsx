import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

// Context Init

const initValue = {
  user: null,
  currentPage: localStorage.getItem("currPage") || "dashboard",
};

export const GlobalContext = createContext(initValue);

export const GlobalContextProvider = ({ children }) => {
  ////

  // Reducer Init

  const [state, dispatch] = useReducer(GlobalReducer, initValue);
  console.log("context", state);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
