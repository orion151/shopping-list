import "./App.css";
import getData from "./data/data";
import { ShoppingItem } from "./components";

function App() {
  return (
    <div className="App">
      {getData().map((item) => (
        <ShoppingItem {...item} />
      ))}
    </div>
  );
}

export default App;
