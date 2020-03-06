import React, { useRef } from "react";
import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children }) => {
  const $carousel = useRef(null);

  const scrollL = () => {
    let scrollLevel = $carousel.current.scrollLeft;
    $carousel.current.scrollTo({
      left: scrollLevel - 400,
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollR = () => {
    let scrollLevel = $carousel.current.scrollLeft;
    $carousel.current.scrollTo({
      left: scrollLevel + 400,
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
      <div className="scroll-left" onClick={scrollL}>
        <div className="arrow R"></div>
      </div>
      <div className="scroll-right" onClick={scrollR}>
        <div className="arrow L"></div>
      </div>
      <section className="carousel" ref={$carousel}>
        <div className="carousel__container">{children}</div>
      </section>
    </div>
  );
};
export default Carousel;
