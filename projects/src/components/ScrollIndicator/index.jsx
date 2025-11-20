import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [dataFetched, setDataFetched] = useState({ products: [] });
  const [loading, setLoading] = useState(false);
  const [totalScroll, setTotalScroll] = useState(0);

  async function FetchData(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      if (data && data.products && data.products.length > 0) {
        setDataFetched({ products: data.products });
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    FetchData(url);
  }, [url]);

  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const ScrollPercentage = (scrollTop / (totalHeight - viewportHeight)) * 100;
    setTotalScroll(ScrollPercentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div>
        <div className="w-full h-2.5 bg-amber-50 sticky top-0">
          <div
            className="h-full bg-amber-950"
            style={{ width: `${totalScroll}%` }}
          ></div>
        </div>
        <div className="text-center">
          <h1>Scroll indicator</h1>
          {dataFetched.products.map((item) => (
            <h4 key={item.id}>{item.title}</h4>
          ))}
        </div>
      </div>
    </>
  );
}
