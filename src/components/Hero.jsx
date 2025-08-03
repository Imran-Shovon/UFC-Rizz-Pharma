import players from "../assets/PLAYERS.jpg";
const Hero = () => {
  return (
    <section
      className="md:flex px-2 md:px-24 pt-6 pb-3 "
    >
      <div className="">
        <div>
          <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-4">
            Prescription<br />
            Treatments For<br />
            Your <br /> <span className="text-yellow-400">Health Goals</span>
          </h1>
          <button className="mt-6 cursor-pointer text-2xl px-8 py-4 rounded-full border text-white ">
            Find My Treatment
          </button>
        </div>
      </div>

      <div
        className="px-2"
        // style={{ marginBottom: "-50px" }}
      >
        <img src={players} alt="Fighters" className="h-[400px] object-cover" />
      </div>
    </section>
  );
};

export default Hero;