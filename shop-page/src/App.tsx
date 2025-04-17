import "./App.css";
import { BestSellers } from "./BestSeller";
import { Header } from "./Header";

function App() {
  return (
    <div className="appContainer">
      <Header/>
      <BestSellers/>
    </div>
  );
}

export default App;
