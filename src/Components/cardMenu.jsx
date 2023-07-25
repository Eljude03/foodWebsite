

export const Cards = ( {item, addToCart}) => {

const {id, foodName, price, image} = item
  return (


                <div className="box">
                     <div className="image">
                         <img src={image} alt="" />
                         <a href="#" className="fas fa-heart"></a>
                     </div>
                     <div className="content">
                         <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                         </div>
                         <h3> {foodName} </h3>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, 
                              obcaecati?</p>
                         <button onClick={()=> addToCart(item)} className="btn">add to cart </button>
                         <span className="price"> ₱{price}.00</span>
                     </div>
                </div>


  
  )
}

export default Cards;
