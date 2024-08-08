import '../styles/banner.css'
import logo from '../assets/logo.png'

function Banner(){
    const title='La maison de la jungle'
    return <div className="lmj_banner">
        <img src={logo} alt='La maison jungle' className='lmj_logo'/>
        <h1 className='lmj_title'>{title}</h1>
        
    </div>
}
export default Banner