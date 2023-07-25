import p1 from "../img/p1.jpg"
import p2 from "../img/p2.jpg"
import p3 from "../img/p3.jpg"
import p4 from "../img/p4.jpg"
import p5 from "../img/p5.jpeg"


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Grid } from "swiper";

export default function Review() {
    return(
        <section className="review" id="review">

            <h3 className="sub-heading">customer's review</h3> 
            <h1 className="heading">WHAT THEY SAY</h1>

            <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
           
            autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="review-slider"
            >
                <div className="review-slider">
                
                    <div className="wrapper">
                        <SwiperSlide>
                            <div className="slide">
                                <i className="fas fa-quote-right"></i>
                                <div className="user">
                                    <img src={p1} alt="" />
                                    <div className="user-info">
                                        <h3>Elizabeth Smith</h3>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aut,
                                    recusandae reprehenderit repudiandae accusamus error?</p>
                            </div>
                        </SwiperSlide>
                    </div>
                    
                    <div className="wrapper">
                        <SwiperSlide>
                            <div className="slide">
                                <i className="fas fa-quote-right"></i>
                                <div className="user">
                                    <img src={p2} alt="" />
                                    <div className="user-info">
                                        <h3>Elizabeth Smith</h3>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>

                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aut,
                                    recusandae reprehenderit repudiandae accusamus error?</p>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className="wrapper">
                        <SwiperSlide>
                            <div className="slide">
                                <i className="fas fa-quote-right"></i>
                                <div className="user">
                                    <img src={p3} alt="" />
                                    <div className="user-info">
                                       <h3>Elizabeth Smith</h3>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>

                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aut,
                                    recusandae reprehenderit repudiandae accusamus error?</p>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className="wrapper">
                        <SwiperSlide>
                            <div className="slide">
                                <i className="fas fa-quote-right"></i>
                                <div className="user">
                                    <img src={p4} alt="" />
                                    <div className="user-info">
                                       <h3>Elizabeth Smith</h3>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>

                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aut,
                                    recusandae reprehenderit repudiandae accusamus error?</p>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className="wrapper">
                        <SwiperSlide>
                            <div className="slide">
                                <i className="fas fa-quote-right"></i>
                                <div className="user">
                                    <img src={p5} alt="" />
                                    <div className="user-info">
                                       <h3>Elizabeth Smith</h3>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>

                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aut,
                                    recusandae reprehenderit repudiandae accusamus error?</p>
                            </div>
                        </SwiperSlide>
                    </div>

                </div>
            </Swiper>

        </section>
    )
}