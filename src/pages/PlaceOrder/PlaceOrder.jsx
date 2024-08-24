import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'


 const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='Frist name' />
        <input type="txt" placeholder='Last name' />
      </div>
      <input type="email" placeholder='Email address' />
      <input type="text" placeholder='Street'/>
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="txt" placeholder='State' />
      </div>
      <input type="text" placeholder='Zip code' />
      <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='phone'/>
      <div className="place-order-right">
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
             <p>Subtotal</p>
             <p>${getTotalCartAmount()}</p>
             <hr/>
          </div>
          <div className="cart-total-details">
             <p>Delivery Fee</p>
             <p>${2}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
               <b>Total</b>
               <b>${getTotalCartAmount()+2}</b>

          </div>
         
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>


      </div>
    </form>
  )
}
export default PlaceOrder