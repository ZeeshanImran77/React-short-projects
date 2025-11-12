import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function RatingStar({ noOfRating }) {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };
  return (
    <>
      <h1 className="text-4xl text-center mb-4 font-bold">Rating</h1>

      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => handleRating(index)}
              className={`${
                rating >= index ? "text-yellow-200" : "text-black"
              } text-3xl cursor-pointer`}
            />
          );
        })}
      </div>
    </>
  );
}
