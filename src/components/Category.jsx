import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your actual mock API URL
  const apiUrl = "https://corsproxy.io/?https://api.slingacademy.com/v1/sample-data/photos";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCategories(response.data.photos);
        console.log(response.data.photos)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section
      className="relative py-12 px-8 text-white"
      style={{ minHeight: "600px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="relative m-auto w-full md:w-3/6">
          <input
            type="text"
            placeholder="Search by product/treatment"
            className="w-full px-14 text-2xl py-6 rounded-full outline text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white pr-4"
          />
          <IoSearch
            size={25}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>

        {/* Title */}
        <h2 className="text-5xl my-12 font-bold text-white text-center">
          Shop By <span className="text-[#d3a04a]"> Category</span>
        </h2>

        {/* Loading state */}
        {loading ? (
          <p className="text-center text-gray-300">Loading categories...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative   rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                // style={{ backgroundColor: category.color + "20" }}
              >
                <img
                  src={category.url}
                  alt={category.title}
                  className="w-full  object-cover"
                />
                <div className="p-4">
                  <h3 className=" absolute left-2 top-2  text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
