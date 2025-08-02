import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BGArt from '../assets/bg_artwork.png';

const testimonials = [
  {
    quote: "Hims changed everything! My hair is fuller and healthier than ever.",
    rating: 5,
    name: "John Williams",
    title: "Lead Designer",
    image: "/images/testimonial1.jpg",
  },
  {
    quote: "After using Hims, the difference in hair growth is amazing!",
    rating: 4,
    name: "Sophia Lee",
    title: "Marketing Manager",
    image: "/images/testimonial2.jpg",
  },
  {
    quote: "I tried everything, but only Hims gave me real results.",
    rating: 5,
    name: "Michael Chen",
    title: "UX Engineer",
    image: "/images/testimonial3.jpg",
  },
  {
    quote: "Hims helped me feel confident again!",
    rating: 5,
    name: "Emma Brown",
    title: "Product Manager",
    image: "/images/testimonial4.jpg",
  },
  {
    quote: "Great service and great product. Highly recommended!",
    rating: 4,
    name: "Daniel Garcia",
    title: "Frontend Developer",
    image: "/images/testimonial5.jpg",
  },
];

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
          className="pb-20"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-[360px] flex flex-col justify-between">
                <p className="text-base italic line-clamp-4 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
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

      {/* Pagination Bullet Styling */}
      <style>{`
        .swiper-pagination {
          display: flex !important;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          transition: opacity 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #facc15; /* amber-400 */
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
