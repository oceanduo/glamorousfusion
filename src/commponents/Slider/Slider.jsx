import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://picsum.photos/1600/1000?random=1",
    "https://picsum.photos/1600/1000?random=2",
    "https://picsum.photos/1600/1000?random=3"
   
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide -1 );
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (e) => e + 1);
  };
//    两种表达方式都可以

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      {/* 这一步是放在jsx中的计算，x轴上的移动 */}
      
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;