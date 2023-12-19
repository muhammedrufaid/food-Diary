const AddTocart = ({addToCartItem}) =>{
    console.log("addy tooo cart",addToCartItem);

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
                {/* <img src={addToCartItem} alt="" />
                <h6>Item Name</h6> */}
                {addToCartResults}
            </div>
        </div>
    )
}
export default AddTocart;