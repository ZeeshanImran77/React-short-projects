import { useState } from "react";
import QRCode from "react-qr-code";
export default function QRcodeGenerator() {
  const [input, setInput] = useState("");
  const [QRvalue, setQRvalue] = useState("");
  const handleGenerateQR = () => {
    const hasValue = input && input.trim !== "" ? true : false;
    hasValue && setQRvalue(input);
    setInput("");
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex items-center gap-3 max-w-4xl m-auto mb-8">
          <input
            className="border-2 border-black h-[100%] p-4"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Enter Something to generate QR"
          />
          <button
            disabled={input && input.trim !== "" ? true : false}
            onClick={handleGenerateQR}
            className="bg-blue-600 text-white rounded-sm py-4 px-6 cursor-pointer hover:bg-blue-500 transition-all"
          >
            Generate QR Code
          </button>
        </div>

        <QRCode id="qr-code-value" value={QRvalue} />
      </div>
    </>
  );
}
