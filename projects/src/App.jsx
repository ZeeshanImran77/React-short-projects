import "./index.css";
import Accordion from "./components/Accordion/Accordion";
import RandomColorGenerator from "./components/Accordion/RandomColorGenerator";
import RatingStar from "./components/RatingStars";
import ImageSlider from "./components/ImageSlider";
import LoadingProducts from "./components/LoadingProducts";

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

      {/* image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=5"} />
      <div className="my-40"></div>

      {/* loading products set of 20  */}
      <LoadingProducts />
      <div className="my-40"></div>
    </div>
  );
}

export default App;
