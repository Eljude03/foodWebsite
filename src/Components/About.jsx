import salad from "../img/—Pngtree—salad_9117542.png"

export default function About() {
    return(
        <section className="about" id="about">

            <h3 className="sub-heading"> About Us </h3>
            <h1 className="heading"> WHY CHOOSE US? </h1>

            <div className="row">

                <div className="image">
                    <img src={salad} alt="" />
                </div>

                <div className="content">
                    <h3>Best food in the country</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Repudiandae deleniti enim quia, voluptatum rerum ratione ex vitae quas 
                        molestiae perspiciatis!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem in sequi
                         eius obcaecati quisquam hic.</p>
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
                    <a href="#" className="btn">learn more</a>
                </div>

            </div>
            
        </section>
    )
}