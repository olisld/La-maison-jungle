import Carescale from "./carescale"
import '../styles/plantitem.css'
import '../styles/carescale.css'

// function Handleclick(plantname){
//     alert(`Vous voulez achetez un ${plantname}? Verry nice!!!!!`)
// }
function handleclick(plantname){
    alert(`Vous voulez acheter 1 ${plantname} ?`)
}

function Plantitem({name,cover,id,light,water,price}){
    return(
        <li key={id} className="lmj-plant-item" onClick={()=>handleclick(name)} >
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name} <span className="price">{price}€</span>
            <div className="Info-entretien">
                <Carescale careType='light' scaleValue={light}/>
                <Carescale careType='water' scaleValue={water}/>
            </div>
        </li>
    )
    
}
export default Plantitem