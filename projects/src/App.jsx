import "./index.css";
import Accordion from "./components/Accordion/Accordion";
import RandomColorGenerator from "./components/Accordion/RandomColorGenerator";
import RatingStar from "./components/RatingStars";
import ImageSlider from "./components/ImageSlider";
import LoadingProducts from "./components/LoadingProducts";
import RecursiveMenus from "./components/RecursiveMenus";
import menus from "./components/RecursiveMenus/data";
import QRcodeGenerator from "./components/QRcode";
import ScrollIndicator from "./components/ScrollIndicator";
import Tabs from "./components/Tabs";
import Modal from "./components/Modal";

function App() {
  const tabs = [
    {
      title: "tab1",
      content: "lorem epsum 1",
    },
    {
      title: "tab2",
      content: "lorem epsum 2",
    },
    {
      title: "tab3",
      content: "lorem epsum 3",
    },
  ];
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
      {/* <LoadingProducts /> */}
      <div className="my-40"></div>

      {/* recursive menus, multi menus */}
      <RecursiveMenus menus={menus} />
      <div className="my-40"></div>

      <QRcodeGenerator />
      <div className="my-40"></div>

      {/* scroll indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <div className="my-40"></div>

      {/* custom tabs */}
      <Tabs tabs={tabs} defaultIndex={0} />
      <div className="my-40"></div>

      {/* custom modal */}
      <Modal />
      <div className="my-40"></div>
    </div>
  );
}

export default App;
