import "./index.css";
import Accordion from "./components/Accordion/Accordion";
import RandomColorGenerator from "./components/Accordion/RandomColorGenerator";
import RatingStar from "./components/RatingStars";

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

      {/* rating star */}
      <RatingStar />
      <div className="my-40"></div>
    </div>
  );
}

export default App;
