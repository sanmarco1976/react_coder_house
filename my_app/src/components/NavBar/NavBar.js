import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className="NavBarDiv">  
                <ItemListContainer greeting={"FELIXA"} />
                <div className="NavBarDivBotones">
                    <buttom className="NavBarButtom" onClick ={() => console.log('click')}>Inicio</buttom>
                    <buttom className="NavBarButtom" onClick ={() => console.log('click')}>Productos</buttom>
                    <buttom className="NavBarButtom" onClick ={() => console.log('click')}>Contacto</buttom>
                    <CardWidget />
                </div>
            </div>
        </nav>
    )

}


export default NavBar