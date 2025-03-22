import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Icon from "../../icon/icon";
import slideFoto from "../../../assets/images/main.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";

const slides = [
  {
    name: "Samuel Willson",
    profession: "Digital Artist",
    imgSrc: slideFoto,
  },
  {
    name: "Angelina Hellhop",
    profession: "Digital Artist",
    imgSrc: slideFoto,
  },
  {
    name: "Kyle Generale",
    profession: "Digital Artist",
    imgSrc: slideFoto,
  },
  {
    name: "Marina",
    profession: "Frontend Developer",
    imgSrc: slideFoto,
  },
  {
    name: "Seroynia",
    profession: "Backend Developer",
    imgSrc: slideFoto,
  },
];

const CoworkersSlider = () => {
  return (
    <section className="coworkers container">
      <p className="coworkers__link">Meet Our Leadership</p>
      <div className="container__title__buttons">
        <h2 className="coworkers__title">
          Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital
          lending strategy to streamline
        </h2>
        <div className="swiper-buttons">
          <button className="custom-button rotate btn-prev">
            <Icon width="20" height="10" name="arrow-icon" />
          </button>
          <button className="custom-button btn-next">
            <Icon width="20" height="10" name="arrow-icon" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
        // autoplay={{ delay: 6000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide">
              <div className="emoloyee__container">
                <div className="img__container">
                <img className="photo__employee" src={slide.imgSrc} alt="Foto"/>
                </div>
                <p className="name__employee">{slide.name}</p>
                <p className="Occupation__employee">{slide.profession}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CoworkersSlider;
