import "./index.css";
import Accordion from "./components/Accordion";
import RandomColorGenerator from "./components/Accordion/RandomColorGenerator";

function App() {
  return (
    <div>
      <div className="my-40"></div>

      {/* accordion single and multi selection */}
      <Accordion />
      <div className="my-40"></div>

      {/* generate random color */}
      <RandomColorGenerator />
      <div className="my-40"></div>
    </div>
  );
}

export default App;
