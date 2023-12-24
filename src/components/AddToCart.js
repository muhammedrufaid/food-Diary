import { useContext } from "react"
import { StateContext } from "../context/AppProvider"

const AddTocart = ({addToCartItem}) =>{
    // console.log("addy tooo cart",addToCartItem);

    const cartPackage = useContext(StateContext)
    // console.log("the cart item are ready",cartPackage);

    let cartItemsAre =cartPackage.cartItems.map((item)=>{
        return(
            <div>
                <img src={item.img} alt="" />
                <h6>{item.title}</h6>
            </div>
        );
    });


    let addToCartResults =addToCartItem.map((item)=>{
        return(
            <div>
                <img src={item.img} alt="" />  
                <h6>{item.title}</h6>
                
            </div>
        )
    })
    
    return(
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
                <h6 className="text-center">Your Cart</h6>
                {/* {addToCartResults} */}
                {/* <img src={cartPackage.cartItems[0]} alt="" />
                <h6>{cartPackage.cartItems[1]}</h6> */}
            {cartItemsAre}
            </div>
        </div>
    )
}
export default AddTocart;