import seaFoodPizza from "../img/seafood-pizza.png"
import wholehicken from "../img/delicious-chicken-table.png"
import spaghetti from "../img/top-view-spaghetti-served-plate.png"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
    return(
        <section className="home" id="home" >

            <div className="home-slider">

            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            
            modules={[Autoplay, Pagination, Navigation]}
            className="home-slider"
             >
                 <div className="wrapper">

                    <SwiperSlide>
                        <div className="slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>spicy noodles</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Sit illum laborum harum!</p>
                                <a href="#" className="btn" >Order Now</a>
                            </div>
                            <div className="image">
                                <img src={seaFoodPizza} alt="" />
                            </div>    
                         </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>fried chicken</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Sit illum laborum harum!</p>
                                <a href="#" className="btn" >Order Now</a>
                            </div>
                            <div className="image">
                                <img src={wholehicken} alt="" />
                            </div>    
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>Hot pizza</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Sit illum laborum harum!</p>
                                <a href="#" className="btn" >Order Now</a>
                            </div>
                            <div className="image">
                                <img src={spaghetti} alt="" />
                            </div>    
                        </div>
                    </SwiperSlide>

                </div>
             </Swiper>
            </div>

        </section>
    )
}