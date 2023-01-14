import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

// Context Init

const initValue = {
  user: localStorage.getItem("currUser") || null,
};

export const GlobalContext = createContext(initValue);

export const GlobalContextProvider = ({ children }) => {
  ////

  // Reducer Init

  const [state, dispatch] = useReducer(GlobalReducer, initValue);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
