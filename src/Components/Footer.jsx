

export default function Footer() {
    return(
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
                    <a href="#" className="bi-telephone-fill"> +63 956 691 4024</a>
                    <a href="#" className="bi-telephone-fill"> +63 994 826 1240</a>
                    <a href="#" className="bi-envelope-fill"> eljudepanao37@gmail.com</a>
                    <a href="#" className="bi-geo-alt-fill"> Guiguinto, Bulacan, Philippines</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="https://www.facebook.com/JudE03.VP/" className="bi-facebook" > Facebook</a>
                    <a href="#" className="bi-twitter"> Twitter</a>
                    <a href="https://www.instagram.com/eljudepanao/" className="bi-instagram"> Instagram</a>
                    <a href="https://www.linkedin.com/in/eljude-panao-370219134/" className="bi-linkedin"> Linkedin</a>
                </div>   

            </div>

            <div className="credit"> copyright @ 2023 by <span>Eljude V. Panao</span></div>

        </section>
    )
}