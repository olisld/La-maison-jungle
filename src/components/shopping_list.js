import { plantList } from "../Datas/plantlist"
import '../styles/shoppinglist.css'
import Plantitem from "./plantitem";
import Categories from "./categories";
// import { useState } from "react";
function Shoppinglist({cart,updateCart,activeCat,setActiveCat}){
    // const[activeCat,setActiveCat]=useState('')
    const categories=plantList.reduce((acc,plant)=>{
        if (!acc.includes(plant.category)) {
            acc = acc.concat(plant.category);
        }
        return acc;
    },[]
    )
    function addCart(name,price){
        const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
    }
    //le &&  auu niveau de plant.isspecialoffer équivaut à une condition ici comme si on faisait de l'écriture ternaire et que l'on demande si il y'a une catégorie isspecialoffer dans la list de plantes si oui alors un mot solde avec une classe permettant de stylisé l'élément
    return(
        <div className="lmj-shopping-list">
            <Categories
                ALLcategories={categories}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
            />
            <ul className='lmj-plant-list'>
                {plantList.map(({name,cover,id,light,water,price,category})=>(
                    !activeCat || activeCat === category?(
                        <div key={id}>
                            <Plantitem
                                name={name}
                                cover={cover} 
                                id={id}
                                light={light}
                                water={water}
                                price={price}
                            />
                            <button onClick={()=>addCart(name,price)}>Ajouter</button>
                        </div>):(
                            null
                        )                
                ))}
            </ul>   
        </div>
    )
}


export default Shoppinglist