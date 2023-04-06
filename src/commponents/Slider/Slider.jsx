import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://i.pinimg.com/originals/c7/46/0e/c7460e86cfdaea11505ed13226577dff.jpg",
    "https://cdn.shopify.com/s/files/1/0574/6822/3664/products/Joshua-Space-Recycled-Planter-1-3x4.jpg?v=1626165611",
    "https://cdn.shopify.com/s/files/1/0419/5097/0013/products/hortensia-preservada-con-spray-1-pieza-amarillo.jpg?v=1599185382"
   
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