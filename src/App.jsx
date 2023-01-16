import "./styles/App.css";
import RoutesController from "./router/RoutesController";
import { GlobalContext, GlobalContextProvider } from "./Context/GlobalContext";
import { useContext, useEffect, useState } from "react";

function App() {
  console.log("APp rendred");
  return (
    <GlobalContextProvider>
      <RoutesController />
    </GlobalContextProvider>
  );
}

export default App;
