import '../styles/cart.css'
import { useState,useEffect } from 'react'


function Cart({cart,updateCart}){
    const[isOpen,updateIsOpen]=useState(false)
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    useEffect(()=>{
        alert(`J'aurais ${total}€ à payer`)
    },[total])
    
    return isOpen?(
        
            <div className='lmj_cart'>

                <button onClick={()=>updateIsOpen(false)} 
                        className='lmj-cart-toggle-button'>
                    Fermer le Panier
                </button>
                {cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul className='list-no-padding'>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} className='separation-div'>
								{name} {price}€ x {amount}
							</div>
                            
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			    ) : (
				<div>Votre panier est vide</div>
			    )}
                
                
            </div>
            
        
    ):(
        <div className='lmj-cart-closed'>
            <button onClick={()=>updateIsOpen(true)}
                    className='lmj-cart-toggle-button'>
                Ouvrir le Panier
            </button>
        </div>
    )

}
export default Cart