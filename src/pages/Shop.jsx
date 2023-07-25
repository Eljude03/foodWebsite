import seaFoodPizza from "../img/seafood-pizza.png";
import wholehicken from "../img/delicious-chicken-table.png";
import spaghetti from "../img/top-view-spaghetti-served-plate.png";
import salad from "../img/—Pngtree—salad_9117542.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Review

import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Review

import productItems from "../data/Data";
import CardsMenu from "../Components/cardMenu";
import dish from "../data/dishesData";
import DishesCards from "../Components/dishesCards";

export default function Shop({addToCart}) {
  const Menu = productItems.map((item) => (
    <CardsMenu
      key={item.id}
      image={item.image}
      foodName={item.foodName}
      price={item.price}
      addToCart={addToCart}
      item={item}
      
    />
  ));
  const Dishes = dish.map((item) => (
    <DishesCards
      key={item.id}
      image={item.image}
      foodName={item.foodName}
      price={item.price}
      addToCart={addToCart}
      item={item}
    />
  ));

  return (
    <div className="shop">
      {/* Home Section Start*/}

      <section className="home" id="home">
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
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit illum laborum harum!
                    </p>
                    <a href="#" className="btn">
                      Order Now
                    </a>
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
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit illum laborum harum!
                    </p>
                    <a href="#" className="btn">
                      Order Now
                    </a>
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
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit illum laborum harum!
                    </p>
                    <a href="#" className="btn">
                      Order Now
                    </a>
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

      {/* Home Section End */}

      {/* Dishes Section Start */}

      <section className="dishes" id="dishes">
        <h3 className="sub-heading">Our Dishes</h3>
        <h1 className="heading">POPULAR DISHES</h1>

        <div className="box-container">{Dishes}</div>
      </section>

      {/* Dishes Section End */}

      {/* About Section Start */}

      <section className="about" id="about">
        <h3 className="sub-heading"> About Us </h3>
        <h1 className="heading"> WHY CHOOSE US? </h1>

        <div className="row">
          <div className="image">
            <img src={salad} alt="" />
          </div>

          <div className="content">
            <h3>Best food in the country</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae deleniti enim quia, voluptatum rerum ratione ex vitae
              quas molestiae perspiciatis!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              in sequi eius obcaecati quisquam hic.
            </p>
            <div className="icons-container">
              <div className="icons">
                <i className="fas fa-shipping-fast"></i>
                <span>Free deliver</span>
              </div>
              <div className="icons">
                <i className="fas fa-peso-sign"></i>
                <span>Easy Payment</span>
              </div>
              <div className="icons">
                <i className="fas fa-headset"></i>
                <span>24/7 service</span>
              </div>
            </div>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>

      {/* About Section End */}

      {/* menu */}

      <section className="menu" id="menu">
        <h3 className="sub-heading">our menu</h3>
        <h1 className="heading"> TODAY'S SPECIALTY </h1>

        <div className="box-container">{Menu}</div>
      </section>

      {/* Review Section Start */}

      <section className="review" id="review">
        <h3 className="sub-heading">customer's review</h3>
        <h1 className="heading">WHAT THEY SAY</h1>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          breakpoints={{
            "@0.5": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.25": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@2.0": {
              slidesPerView: 3,
              spaceBetween: 40,
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
                      <h3>Sarah Cruz</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aut, recusandae reprehenderit repudiandae accusamus
                    error?
                  </p>
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
                      <h3>John Doe</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aut, recusandae reprehenderit repudiandae accusamus
                    error?
                  </p>
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
                      <h3>Robert Doyle</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aut, recusandae reprehenderit repudiandae accusamus
                    error?
                  </p>
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
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aut, recusandae reprehenderit repudiandae accusamus
                    error?
                  </p>
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
                      <h3>Patrick Schmoe</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aut, recusandae reprehenderit repudiandae accusamus
                    error?
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>

      {/* Review Section End*/}

      {/* Order Section Start */}

      <section className="orders" id="orders">
        <h3 className="sub-heading">order now</h3>
        <h1 className="heading">FREE AND FAST</h1>

        <form action="">
          <div className="inputBox">
            <div className="input">
              <span>your name</span>
              <input type="text" placeholder="enter your name" />
            </div>
            <div className="input">
              <span>your number</span>
              <input type="number" placeholder="enter your number" />
            </div>
            <div className="input">
              <span>your order</span>
              <input type="text" placeholder="enter food name" />
            </div>
            <div className="input">
              <span>additional food</span>
              <input type="text" placeholder="extra with food" />
            </div>
            <div className="input">
              <span>how much</span>
              <input type="number" placeholder="how many orders" />
            </div>
            <div className="input">
              <span>date and time</span>
              <input type="datetime-local" />
            </div>
            <div className="input">
              <span>your address</span>
              <textarea
                name=""
                placeholder="enter your address"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="input">
              <span>your message</span>
              <textarea
                name=""
                placeholder="enter your message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>

          <button className="btn">Order Now</button>
        </form>
      </section>

      {/* Order Section End */}

      {/* Footer */}

      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>locations</h3>
            <a href="#">Philippnines</a>
            <a href="#">Japan</a>
            <a href="#">Russia</a>
            <a href="#">USA</a>
            <a href="#">Germany</a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#home">Home</a>
            <a href="#dishes">Dishes</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#review">Review</a>
            <a href="#orders">Order</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#" className="bi-telephone-fill">
              {" "}
              +63 956 691 4024
            </a>
            <a href="#" className="bi-telephone-fill">
              {" "}
              +63 994 826 1240
            </a>
            <a href="#" className="bi-envelope-fill">
              {" "}
              eljudepanao37@gmail.com
            </a>
            <a href="#" className="bi-geo-alt-fill">
              {" "}
              Guiguinto, Bulacan, Philippines
            </a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a
              href="https://www.facebook.com/JudE03.VP/"
              className="bi-facebook"
            >
              {" "}
              Facebook
            </a>
            <a href="#" className="bi-twitter">
              {" "}
              Twitter
            </a>
            <a
              href="https://www.instagram.com/eljudepanao/"
              className="bi-instagram"
            >
              {" "}
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/eljude-panao-370219134/"
              className="bi-linkedin"
            >
              {" "}
              Linkedin
            </a>
          </div>
        </div>

        <div className="credit">
          {" "}
          copyright @ 2023 by <span>Eljude V. Panao</span>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
