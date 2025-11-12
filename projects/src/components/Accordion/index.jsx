import React, { useState } from "react";
import data from "./data";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState(false);
  const [multiselection, setMultiSelection] = useState([]);

  function handleSingleSelection(id) {
    setSelected((prev) => (prev === id ? null : id));
  }

  function handleMultiSelection(id) {
    if (multiselection.includes(id)) {
      setMultiSelection(multiselection.filter((item) => item !== id));
    } else {
      setMultiSelection([...multiselection, id]);
    }
  }

  const toggleMultiSelect = () => {
    setMultiSelected((prev) => !prev);
    setSelected(null);
    setMultiSelection([]);
  };
  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-4">
      <button
        onClick={toggleMultiSelect}
        className={`${
          multiSelected ? "bg-amber-600" : "bg-gray-800"
        }  text-white font-bold text-lg py-2 px-4 border-r-8 cursor-pointer mx-auto flex`}
      >
        Multi selection
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            className="accordion"
            key={item.id}
            onClick={
              multiSelected
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)
            }
          >
            <div className="flex align-baseline justify-between p-4 bg-gray-900">
              <h3 className="text-white font-bold text-xl">{item.question}</h3>
              <span>
                {selected === item.id || multiselection.includes(item.id) ? (
                  <HiChevronUp className="text-white w-6 h-6" />
                ) : (
                  <HiChevronDown className="text-white w-6 h-6" />
                )}
              </span>
            </div>
            {multiSelected ? (
              <p
                className={`px-4 bg-gray-200 overflow-hidden transition-height duration-200 ease-in-out ${
                  multiselection.includes(item.id) ? "h-auto py-4" : "h-0"
                }`}
              >
                {item.answer}
              </p>
            ) : (
              <p
                className={`px-4 bg-gray-200 overflow-hidden transition-height duration-200 ease-in-out ${
                  selected === item.id ? "h-auto py-4" : "h-0"
                }`}
              >
                {item.answer}
              </p>
            )}
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}

export default Accordion;
