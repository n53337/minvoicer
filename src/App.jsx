import "./styles/App.css";
import RoutesController from "./router/RoutesController";
import { GlobalContext, GlobalContextProvider } from "./Context/GlobalContext";
import { useContext, useEffect, useState } from "react";

function App() {
  // const user = true;
  const { user } = useContext(GlobalContext);

  // TODO Local Storage pages bug

  console.log("app", user);
  return (
    <GlobalContextProvider>
      <RoutesController />
    </GlobalContextProvider>
  );
}

export default App;
