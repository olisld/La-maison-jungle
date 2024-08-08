// import { plantList } from "../Datas/plantlist";
// import { useState } from "react";
import '../styles/categories.css'

function Categories({ALLcategories,activeCat,setActiveCat}){

    return (
        <div className='lmj-categories'>
            <select
                value={activeCat}
                onChange={(e)=>setActiveCat(e.target.value)}
                className='lmj-categories-select'            
            >
                    <option value=''>---</option>
                    {ALLcategories.map((Cat)=>(
                        <option key={Cat} value={Cat}>{Cat}</option>
                    ))}
            </select>
            <button onClick={()=>setActiveCat('')}>Réinitialiser</button>
        </div>
    ) 
}

export default Categories