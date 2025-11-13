import { useEffect, useState } from "react";

export default function LoadingProducts() {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await res.json();
      if (data.products.length === 0) {
        setLoading(false);
        return;
      }

      setProducts((prev) => [...prev, ...data.products]);
      setLoading(false);
      console.log(data.products);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setIsDisabled(true);
    }
  }, [products]);
  return (
    <>
      <div className="bg-gray-200 py-40">
        <h2 className="text-center text-8xl mb-8 font-bold">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl m-auto">
          {Loading ? (
            <PulsingDots size={3} color="bg-amber-700" />
          ) : (
            products.map((item) => (
              <div
                key={item.id}
                className="item border-2 border-black rounded-2xl p-4"
              >
                <div className="img h-60">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center mt-8">
          <button
            disabled={isDisabled ? true : false}
            onClick={() => setCount((prev) => prev + 1)}
            className="text-lg py-2 px-7 rounded-4xl bg-amber-700 text-white hover:bg-amber-950 cursor-pointer transition-all ease-in-out"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

function PulsingDots({ size = 3, color = "bg-gray-600" }) {
  return (
    <div className="flex items-center gap-2" role="status" aria-live="polite">
      <span
        className={`w-${size} h-${size} ${color} rounded-full animate-bounce`}
      ></span>
      <span
        className={`w-${size} h-${size} ${color} rounded-full animate-bounce animation-delay-150`}
      ></span>
      <span
        className={`w-${size} h-${size} ${color} rounded-full animate-bounce animation-delay-300`}
      ></span>

      {/* small helper classes for delay (Tailwind doesn't include delays for utility animations by default) */}
      <style>{`
        .animation-delay-150 { animation-delay: 150ms; }
        .animation-delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}
