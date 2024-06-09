import React from "react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

export default function Banner() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full rounded-2xl ">
        <img src={banner1} className="w-full max-h-[500px]" />
        <div className="absolute   flex h-full ">
          <div className="space-y-3 bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
            <div className="translate-x-20 translate-y-1/4 space-y-4">
              <h2 className="text-6xl w-2/4 text-white font-bold tracking-wide  ">
                Affordable<br></br> price For Car<br></br> Servicing
              </h2>
              <p className="w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                modi fuga expedita, culpa delectus facilis totam possimus rem
                dolorem quibusdam.
              </p>
              <button className="btn  bg-orange-600  mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-error">
                Last Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full max-h-[500px]" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full max-h-[500px]" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src={banner4} className="w-full max-h-[500px]" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
