

export default function Orders() {
    return(
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
                        <textarea name="" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="input">
                        <span>your message</span>
                        <textarea name="" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

                <button className="btn">Order Now</button>

            </form>

        </section>
    )
}