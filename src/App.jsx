import "./styles/App.css";
import RoutesController from "./router/RoutesController";
import { GlobalContext, GlobalContextProvider } from "./Context/GlobalContext";
import { useContext } from "react";

function App() {
  const user = true;
  const value = useContext(GlobalContext);
  console.log(value);
  return (
    <GlobalContextProvider>
      <RoutesController auth={user} />;
    </GlobalContextProvider>
  );
}

export default App;
