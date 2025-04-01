// import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="flex flex-col items-center w-[8rem] h-[11rem] border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem] mx-4">
    <img
      src="/images/html.png"
      className="tools"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <p className="text-white text-xl font-bold">HTML</p>
  </div>,

  <div className="flex flex-col items-center w-[8rem] h-[11rem] border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem] mx-4">
    <img
      src="/images/css.png"
      className="tools"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <p className="text-white text-xl font-bold">CSS</p>
  </div>,

  <div className="flex flex-col items-center w-[8rem] h-[11rem] border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem] mx-4">
    <img
      src="/images/js.png"
      className="tools"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <p className="text-white text-xl font-bold">javaScript</p>
  </div>,

  <div className="flex flex-col items-center w-[8rem] h-[11rem] border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem] mx-4">
    <img
      src="/images/tailwind.png"
      className="tools"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <p className="text-white text-xl font-bold">TailwindCSS</p>
  </div>,

  <div className="flex flex-col items-center w-[8rem] h-[11rem] border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem] mx-4">
    <img
      src="/images/react.png"
      onDragStart={handleDragStart}
      className="tools"
      role="presentation"
    />
    <p className="text-white text-xl font-bold">React</p>
  </div>,

  <div className="flex flex-col items-center w-[8rem] h-[11rem] border-2 border-[#23312e] p-2 bg-[#131b1a] rounded-[1rem] mx-4">
    <img
      className="tools"
      src="/images/firebase.png"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <p className="text-white text-xl font-bold">Firebase</p>
  </div>,
];

export const Gallery = () => (
  <AliceCarousel
    autoPlay
    autoPlayInterval={1000}
    infinite
    autoWidth
    animationType="slide"
    animationDuration={500}
    disableButtonsControls
    disableDotsControls
    mouseTracking
    items={items}
  />
);
