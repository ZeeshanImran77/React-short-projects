import { useEffect, useState } from "react";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [hexValue, setHexValue] = useState("#000000");
  const [rgbValue, setRgbValue] = useState("");

  const handleHexGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setHexValue(hexColor);
    setColor(hexColor);
  };

  const handleRgbGenerator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${r},${g},${b})`;

    setColor(rgbColor);
    setRgbValue(rgbColor);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleRgbGenerator();
    } else {
      handleHexGenerator;
    }
  }, [typeOfColor]);
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="text-white font-bold text-lg py-2 px-4 rounded-md cursor-pointer bg-gray-600"
          >
            Create Hex color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="text-white font-bold text-lg py-2 px-4 rounded-md cursor-pointer bg-gray-600"
          >
            Create RGB color
          </button>
          <button
            onClick={
              typeOfColor === "hex" ? handleHexGenerator : handleRgbGenerator
            }
            className="text-white font-bold text-lg py-2 px-4 rounded-md cursor-pointer bg-gray-600"
          >
            generate random color
          </button>
        </div>
        <div
          className="w-full h-[600px] flex align-middle justify-center flex-col"
          style={{ background: color }}
        >
          <h1
            className={`text-center text-4xl mb-4   ${
              color === "#000000" || color === "rgb(0,0,0)"
                ? "text-white"
                : "text-black"
            } font-bold`}
          >
            {typeOfColor === "hex" ? "Hex Color" : "RGB Color"}
          </h1>

          <h2
            className={`text-center text-4xl ${
              color === "#000000" || color === "rgb(0,0,0)"
                ? "text-white"
                : "text-black"
            } font-bold`}
          >
            {typeOfColor === "hex" ? hexValue : rgbValue}
          </h2>
        </div>
      </div>
    </>
  );
}
