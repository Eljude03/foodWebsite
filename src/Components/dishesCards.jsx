import React from "react"
export default function dishesCards({item, addToCart}) {
    const {id, foodName, price, image} = item
    return(

                <div className="box">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <img src={image} alt="" />
                    <h3>{foodName}</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span>₱{price}.00 </span>
                    <button className="btn" onClick={()=>addToCart(item)}>add to cart</button>
                </div>


 
    )
}