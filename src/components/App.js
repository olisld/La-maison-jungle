
import Banner from './banner';
import Cart from './cart'
import Shoppinglist from './shopping_list';
import Footer from './footer';
import'../styles/layout.css'
import { useState } from 'react';

function App() {
  const[cart,updateCart]=useState([])
  const[activeCat,setActiveCat]=useState('')
  return (
    <div>
      <Banner/>
      <div className='lmj-layout-inner'>
          <Cart 
            cart={cart}  
            updateCart={updateCart}
          />
          <Shoppinglist 
          cart={cart} 
          updateCart={updateCart}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          />
      </div>
      <Footer/>
    </div>
  )

    
}

export default App;
