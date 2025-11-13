import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ImageSlider({ url }) {
  const [sliderData, setSliderData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function ImagesData(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setSliderData(data);
      } catch (e) {
        console.log(e.message);
      }
    }

    ImagesData(url);
  }, []);

  function handlePrev() {
    currentSlide === 0
      ? setCurrentSlide(sliderData.length - 1)
      : setCurrentSlide((prev) => prev - 1);
  }
  function handleNext() {
    currentSlide === sliderData.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide((prev) => prev + 1);
  }

  return (
    <>
      <h2 className="text-4xl text-center font-bold mb-4">Image slider</h2>
      <div className="relative w-full max-w-3xl mx-auto h-[400px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden shadow-md">
        {/* Prev Button */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-3 rounded-full hover:bg-gray-600 transition cursor-pointer"
          onClick={handlePrev}
        >
          <HiChevronLeft className="text-3xl text-white" />
        </button>

        {/* Image */}
        {sliderData && sliderData.length > 0 ? (
          sliderData.map((item, index) => (
            <img
              key={item.id}
              src={item.download_url}
              alt={item.author}
              className={`object-contain max-h-full max-w-full transition-all duration-500 ease-in-out ${
                currentSlide === index ? "block" : "hidden"
              }`}
            />
          ))
        ) : (
          <div className="text-gray-500 font-medium">No Data Found</div>
        )}

        {/* Next Button */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-3 rounded-full hover:bg-gray-600 transition cursor-pointer"
          onClick={handleNext}
        >
          <HiChevronRight className="text-3xl text-white" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {sliderData.map((item, index) => (
            <span
              onClick={() => setCurrentSlide(index)}
              key={index}
              className={`w-5 h-5 rounded-full  cursor-pointer ${
                currentSlide === index ? "bg-white" : "bg-gray-800"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
