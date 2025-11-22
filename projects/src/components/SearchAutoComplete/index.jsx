import { useEffect, useState } from "react";

export default function SearchAutoComplete() {
  const [loading, setloading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const value = e.target.value;
    setSearchParam(value);

    const filter = userData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilterData(filter);
    console.log(filter);
  }

  function clickHandle(e) {
    const value = e.target.innerHTML;
    setSearchParam(value);
    setFilterData([]);
  }

  async function fetchData() {
    try {
      setloading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users) {
        setUserData(data.users.map((item) => item.firstName));
        setloading(false);
      }
      console.log(data.users.map((item) => item.firstName));
    } catch (e) {
      setError(e.message);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-2xl m-auto">
        <h3 className="text-4xl font-bold text-center mb-6">
          Search auto complete
        </h3>
        <input
          onChange={handleChange}
          value={searchParam}
          type="text"
          className="w-full h-12 px-3 rounded-lg border border-black"
          placeholder="Search User..."
        />
        {searchParam.length > 1 && filterData.length > 0 ? (
          <ul className="w-100 rounded bg-gray-200 p-4">
            {filterData.map((item, index) => (
              <li key={index} onClick={clickHandle}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
