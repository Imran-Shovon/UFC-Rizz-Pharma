// import fighters from "../assets/fighters.jpg";
import bgImage from "../assets/BG.png";

const Convenience = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#1a1a2e] to-[#4b0082] text-white py-16 px-8"
      style={{ minHeight: "500px", backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-bold mb-6">
            100% Online
          </h1>
          <h1 className="text-5xl font-bold mb-6">
            100% Convenient
          </h1>
        </div>
        <div>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">▶</span> Chat with a provider 24/7
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">▶</span> Fast, discreet shipping
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">▶</span> Clinically proven ingredients and FDA-approved treatments
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Convenience;