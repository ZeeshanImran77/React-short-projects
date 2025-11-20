import { useState } from "react";
import ModalView from "./ModalView";

export default function Modal() {
  const [isOPen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!isOPen);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-4xl mb-3 font-bold">Custom Modal</h2>
        <button
          onClick={handleModal}
          className="text-white font-bold text-2xl py-3 px-7 rounded-lg bg-black cursor-pointer hover:bg-orange-500 transition-colors"
        >
          Open Modal
        </button>
      </div>
      {isOPen && <ModalView onclose={handleModal} />}
    </>
  );
}
