import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons.js";

function App() {
  return (
    <div className="app">
      <br />
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
