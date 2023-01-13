import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

// Context Init

const initValue = { user: null, page: null };

const data = { user: "usef", page: "dashboard" };

export const GlobalContext = createContext(initValue);

export const GlobalContextProvider = ({ children }) => {
  //

  // Reducer Init

  const [state, dispatch] = useReducer(GlobalReducer, data);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
