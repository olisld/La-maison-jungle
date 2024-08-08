import sun from '../assets/sun.svg'
import water from '../assets/water.svg'
import '../styles/evenement.css'



function Handleclick({scaleValue,careType}){
    const text= careType==='light'?'de lumière':'d\'arrosage'
    const text2= scaleValue===1?'peu': scaleValue===2?'modérément':'beaucoup'
    alert(`Cette plante requiert ${text2} ${text}`)
}

function Carescale({scaleValue, careType}){
    const range=[1,2,3]
    const scaletype= 
        careType ==='light' ?(
        <img src={sun} alt='sun_icon'/>
        ):(
        <img src={water} alt='water_icon'/>
        )               //écriture ternaire de chiasse sa a pas l'air bien compliqué 
    return(

        <div onClick={()=>Handleclick({scaleValue,careType})} className='pointeur-souris'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaletype}</span>
                ) : null
            )}
        </div>
    )
}// la fonction est pas simple à comprendre ne pas hésiter à redemander à chat GPT de nous réexpliquer

export default Carescale