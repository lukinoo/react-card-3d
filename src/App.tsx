import { Card } from "./components/card";
import { SApp } from "./App.styled";
import "./css/main.css";

const App = () => {
  return (
    <SApp className="App">
      <h1>hello, world</h1>
      <Card />
    </SApp>
  );
};

export default App;
