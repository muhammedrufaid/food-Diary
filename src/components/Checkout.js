import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider';

const Checkout = () => {
 const cartPackage = useContext(StateContext);

 let cartItemsAre =cartPackage.cartItems.map((item)=>{
  return(
      <div>
          <img src={item.img} alt="" />
          <h6>{item.title}</h6>
      </div>
  )
})

  return (
    <div className='checkout'>
        <h2>This is a checkout page</h2>
        {/* <img src={cartPackage.cartItems[0]} alt="" />
        <h6>{cartPackage.cartItems[1]}</h6> */}
        {cartItemsAre}
    </div>
  );
};


export default Checkout;