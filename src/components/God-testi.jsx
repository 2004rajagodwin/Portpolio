import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./GodwinSwi.css"; // custom styling

const GodTesti = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jason McClelland",
      position: "President",
      company: "Pratt Industrial",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Treffer Technologies were very detailed and very responsive in creating our solid works files. We will be using their services again.",
    },
    {
      id: 2,
      name: "Jason McClelland",
      position: "President",
      company: "Pratt Industrial",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Treffer Technologies were very detailed and very responsive in creating our solid works files. We will be using their services again.",
    },
    {
      id: 3,
      name: "Jason McClelland",
      position: "President",
      company: "Pratt Industrial",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Treffer Technologies were very detailed and very responsive in creating our solid works files. We will be using their services again.",
    },
    {
      id: 4,
      name: "Jason McClelland",
      position: "President",
      company: "Pratt Industrial",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "Treffer Technologies were very detailed and very responsive in creating our solid works files. We will be using their services again.",
    },
  ];

  return (
    <section className="god-testi-section">
      <div className="container">
        <div className="testi-header">
          <h2>Testimonials</h2>
          <div className="swiper-nav">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testi-swiper"
          loop={true}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testi-card">
                <div className="testi-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="testi-info">
                  <h4>{item.name}, {item.position}</h4>
                  <p className="company">{item.company}</p>
                </div>
                <p className="testi-text">“ {item.content} ”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GodTesti;
