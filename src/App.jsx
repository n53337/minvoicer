import RoutesController from "./router/RoutesController";

function App() {
  const user = false;
  return <RoutesController auth={user} />;
}

export default App;
