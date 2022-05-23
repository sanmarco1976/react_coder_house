import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className="NavBarDiv">  
            <img className= 'NavLogo' src='../Img/logo_felixa.jpg' alt='cart-widget'/>
                <div className="NavBarDivBotones">
                    <button className="NavBarButtom" onClick ={() => console.log('click')}>Inicio</button>
                    <button className="NavBarButtom" onClick ={() => console.log('click')}>Productos</button>
                    <button className="NavBarButtom" onClick ={() => console.log('click')}>Contacto</button>
                    <CardWidget />
                </div>
            </div>
        </nav>
    )

}


export default NavBar