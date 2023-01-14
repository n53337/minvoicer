import "./styles/App.css";
import RoutesController from "./router/RoutesController";
import { GlobalContextProvider } from "./Context/GlobalContext";
import { app } from "./firebase";

function App() {
  const user = true;
  return (
    <GlobalContextProvider>
      <RoutesController auth={user} />;
    </GlobalContextProvider>
  );
}

export default App;
