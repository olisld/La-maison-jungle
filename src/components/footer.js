import { useState } from 'react'
import '../styles/footer.css'
import '../styles/evenement.css'


function test_mail(mailvalue){
    if(!mailvalue.includes('@')){
        alert('Vous n\'avez pas utilisé la touche @, votre email n\'est pas valide')
    }
    else{
        alert(`Votre Email est le suivant : ${mailvalue}`)
    }
}

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleinput(e){
        setInputValue(e.target.value)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail : <input
                    
                type='mail' 
                value={inputValue}
                onChange={handleinput} 
                placeholder='Entrez votre Mail'/>

                {/* </input> */}
                
            </div>
            <button onClick={()=>test_mail(inputValue)} className='pointeur-souris'>Afficher Mon adresse Mail</button>
		</footer>
	)
}

export default Footer