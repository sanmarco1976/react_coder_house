import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className="NavBarDiv">  
                <ItemListContainer greeting={"FELIXA"} />
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