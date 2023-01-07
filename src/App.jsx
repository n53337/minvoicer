import "./styles/App.css";
import RoutesController from "./router/RoutesController";

function App() {
  const user = true;
  return <RoutesController auth={user} />;
}

export default App;
