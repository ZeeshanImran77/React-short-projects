import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length;
  return (
    <>
      <li className="px-3">
        <div
          className="relative py-2 text-2xl"
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          {item.title}
          {hasChildren && (
            <HiChevronDown
              className={`absolute text-2xl top-1/2 right-0 -translate-y-1/2 transition-transform duration-300 ${
                isOpen ? "rotate-[180deg]" : "rotate-[0deg]"
              }`}
            />
          )}
        </div>
        {hasChildren && isOpen && (
          <ul>
            {item.children.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

export default function RecursiveMenus({ menus }) {
  return (
    <>
      <nav className="w-96 bg-gray-400">
        {menus.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </nav>
    </>
  );
}
