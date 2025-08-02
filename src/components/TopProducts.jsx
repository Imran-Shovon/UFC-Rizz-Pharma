import axios from 'axios';
import { useEffect, useState } from "react";
import { FaHeadphones, FaLock, FaStar, FaTruck } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import bgArtWork from "../assets/bg_artwork.png";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Fetch products
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12")
      .then((response) => {
        const mapped = response.data.products.map((p) => ({
          name: p.title,
          image: p.thumbnail,
          price: `$${p.price}`,
          available: p.stock > 0,
        }));
        setProducts(mapped);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  // Responsive itemsToShow
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 1024 ? 3 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide 1 by 1
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % products.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [products]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % products.length
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsToShow
  ).concat(
    currentIndex + itemsToShow > products.length
      ? products.slice(0, (currentIndex + itemsToShow) % products.length)
      : []
  );

  return (
    <section
      className="relative px-4 py-10 text-white"
      style={{ backgroundImage: `url(${bgArtWork})`, backgroundSize: "cover" }}
    >
      {/* Icons */}
      <div className="flex justify-around bg-[rgba(49,65,140,0.3)] py-12 text-white text-sm sm:text-lg flex-wrap gap-4">
        <div className="flex items-center text-2xl gap-2">
          <span className="text-amber-300"><FaLock size={25}/></span> Secure Payment
        </div>
        <div className="flex items-center text-2xl gap-2">
          <span className="text-amber-300"><FaHeadphones /></span> Online Support
        </div>
        <div className="flex items-center text-2xl gap-2">
          <span className="text-amber-300"><FaTruck /></span> Free Shipping
        </div>
        <div className="flex items-center text-2xl gap-2">
          <span className="text-amber-300"><FaStar /></span> Best Value
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl mt-6 sm:text-4xl font-bold text-center mb-6">
        Solutions For Your Unique Health Goals
      </h2>

      {/* Products */}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden text-white shadow-lg"
            >
                <div className="">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-60 object-cover"
                    />
                    <p className={`text-sm absolute right-0 p-3 rounded-2xl bg-gray-600 top-0 ${
                    product.available ? "text-amber-500" : "text-red-400"
                  }`}
                >
                  {product.available ? "In Stock" : "Out of Stock"}
                </p>
                <h3 className="text-xl text-amber-500 absolute right-2 top-24 font-semibold mb-1">{product.name}</h3>
                </div>
              
              <div className="p-4 flex justify-between items-center">
                
                <p className="text-white font-bold mb-1">
                  {product.price}
                </p>
                <button className="p-4 bg-amber-400">
                  < IoCartOutline size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
