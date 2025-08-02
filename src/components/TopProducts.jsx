import { FaHeadphones, FaLock, FaStar, FaTruck } from "react-icons/fa";
import bgArtWork from "../assets/bg_artwork.png";

const TopProducts = () => {
  const categories = [
    { name: "All", active: true },
    { name: "Best Selling Products", active: false },
    { name: "Weight Loss", active: false },
    { name: "Beauty and Hair Loss", active: false },
    { name: "Testosterone/HRT", active: false },
    { name: "Sexual Health", active: false },
  ];

  const products = [
    {
      name: "Retatrutide",
      image: "path/to/retatrutide.jpg",
      price: "$39.99/month",
      note: "Research use only",
    },
    {
      name: "Lyophilized GrowHK / CJC-167 / TB-900",
      image: "path/to/growhk.jpg",
      price: "$39.99/month",
      note: "Research use only",
      recurring: true,
    },
    {
      name: "Compounded Sermorelin 15mg",
      image: "path/to/sermorelin.jpg",
      price: "Starting at $79/month + $45 Physician consult",
      recurring: true,
    },
    {
      name: "2X CJC / Ipamorelin",
      image: "path/to/cjc-ipamorelin.jpg",
      price: "$100 Lab Charge + $45 Physician consult",
      recurring: true,
    },
    {
      name: "Lyophilized Oxytocin",
      image: "path/to/oxytocin.jpg",
      price: "$39.99/month",
      note: "Research use only",
    },
    {
      name: "Lyophilized Finasteride 1mg",
      image: "path/to/finasteride.jpg",
      price: "$39.99/month",
      note: "Research use only",
    },
    {
      name: "Compounded NAD+ 1000mg",
      image: "path/to/nad.jpg",
      price: "Starting at $79/month + $45 Physician consult",
    },
    {
      name: "Lyophilized PT-141 10mg",
      image: "path/to/pt141.jpg",
      price: "$100 Lab Charge + $45 Physician consult",
      recurring: true,
    },
  ];

  return (
    <section
      className="relative p-10  text-white" //from-[#3a2c6e] via-[#22273e] to-[#282a47]
      style={{ minHeight: "600px", backgroundImage: `url(${bgArtWork})` }}
    >
      {/* Top Navigation Icons */}
      <div className="flex justify-around px-10 py-12 mb-8 text-white text-lg ">
        <div className="flex items-center gap-4">
          <FaLock size={25} /> <span className="text-2xl">Secure Payment</span>
        </div>
        <div className="flex items-center gap-2">
          <FaHeadphones size={25} /> <span className="text-2xl">Online Support</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTruck size={25} /> <span className="text-2xl">Free Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar size={25} /> <span className="text-2xl">Best Value</span>
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl font-bold text-center mb-8">
        Solutions For Your Unique Health Goals
      </h2>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
              category.active
                ? "bg-yellow-400 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            } transition`}
          >
            {category.name}
          </button>
        ))}
        <button className="px-4 py-2 text-white">→</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              loading="lazy"
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              {product.note && <p className="text-sm text-gray-400">{product.note}</p>}
              <p className="text-yellow-400 font-bold mt-2">{product.price}</p>
              {product.recurring && (
                <span className="text-xs text-gray-300">Recurring Plan</span>
              )}
              <button className="mt-2 w-full bg-yellow-400 text-black py-1 rounded-full hover:bg-yellow-300 transition">
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-8 gap-4">
        <button className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition">
          ←
        </button>
        <button className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition">
          →
        </button>
      </div>
    </section>
  );
};

export default TopProducts;