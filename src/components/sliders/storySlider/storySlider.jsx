import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./style.css";
import Btn from "../../btn/btn";
import Icon from "../../icon/icon";
import sliderfoto from "../../../assets/images/add-foto.jpg"

const slides = [
  {
    title: "Success Story",
    subtitle:
      "Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process.",
    imgSrc: sliderfoto,
  },
  {
    title: "Success Story 2",
    subtitle:
      "Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process.",
    imgSrc: sliderfoto,
  },
  {
    title: "Success Story 3",
    subtitle:
      "Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process.",
    imgSrc: sliderfoto,
  },
];

const StorySlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const storySlider = swiperRef.current.swiper;
      storySlider.on("slideChange", () => {
        document
          .querySelectorAll(".dot")
          .forEach((dot) => dot.classList.remove("active"));
        document
          .querySelectorAll(`.dot[data-slide="${storySlider.realIndex}"]`)
          .forEach((dot) => dot.classList.add("active"));
      });
      document.querySelectorAll(".custom-pagination .dot").forEach((dot) => {
        dot.addEventListener("click", function () {
          const slideIndex = Number(this.dataset.slide);
          if (!isNaN(slideIndex)) {
            storySlider.slideTo(slideIndex);
          } else {
            console.error("Некорректный индекс слайда");
          }
        });
      });
    }
  }, []);

  return (
    <section class="story container">
    <Swiper
      ref={swiperRef}
      modules={[Autoplay]}
      loop={true}
      speed={1000}
      //   autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="story-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="gap_block">
            <div className="story__text__container">
              <p className="story__title title-2">{slide.title}</p>
              <p className="story__text">{slide.subtitle}</p>
              <Btn
                text="Read Complete Case Study"
                bgColor="transparent"
                className="btn__color"
                link="/about"
              />
              <Icon width={100} height={50} name="logitech" />
              <div class="custom-pagination">
                <span class="dot" data-slide="0"></span>
                <span class="dot" data-slide="1"></span>
                <span class="dot" data-slide="2"></span>
              </div>
            </div>
            <div className="story__image__container">
              <img className="image__foto" alt="woman" src={slide.imgSrc} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
  );
};

export default StorySlider;
