import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className="NavBarDiv">  
                <Link to='/'><img className= 'NavLogo' src='../Img/logo_felixa.jpg' alt='cart-widget'/></Link>
                <div className="NavBarDivBotones">
                    <NavLink to='/'className={({isActive})=>isActive ? 'ActiveButtom' : 'NavBarButtom'}>Todos Los Productos</NavLink>
                    <NavLink to='/categoria/day' className={({isActive})=>isActive ? 'ActiveButtom' : 'NavBarButtom'}>All-Day</NavLink>
                    <NavLink to='/categoria/nigth' className={({isActive})=>isActive ? 'ActiveButtom' : 'NavBarButtom'}>All-Night</NavLink>
                    <CardWidget />
                </div>
            </div>
        </nav>
    )

}


export default NavBar