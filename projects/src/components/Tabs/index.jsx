import { useState } from "react";

export default function Tabs({ tabs, defaultIndex = 0 }) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <>
      <div className="w-5xl mx-auto">
        <div className="flex gap-2.5 justify-center">
          {tabs.map((item, index) => (
            <button
              onClick={() => setActive(index)}
              key={index}
              className={` text-black py-2 px-8 rounded-lg font-bold text-2xl ${
                active === index ? "bg-black text-white" : "bg-gray-300"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 py-28 text-center">
          <p className="text-4xl">{tabs[active].content}</p>
        </div>
      </div>
    </>
  );
}
