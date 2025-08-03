import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BGArt from '../assets/bg_artwork.png';
import testimonials from "../utils/testimonialsDetails";
import './Testimonial.css';



const Testimonial = () => {
  return (
    <section className="relative py-16 px-4 text-white" 
    style={{ backgroundImage: `url(${BGArt})` }}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Hear What <span className="text-amber-300">Rizz</span> Patients Have To Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          }}
          className="pb-20 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 flex flex-col justify-center items-center backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-[390px] ">
                <p className="text-2xl mb-4">
                  &ldquo; <br />{testimonial.quote};
                </p>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gray-400">☆</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Stepper */}
        <div className="swiper-pagination mt-6 flex justify-center" />
      </div>
    </section>
  );
};

export default Testimonial;
