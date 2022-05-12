import './NavBar.css'

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className="NavBarDiv">
                <h1 className="NavBarH1">FELIXA</h1>
                <div className="NavBarDivBotones">
                    <buttom className="NavBarButtom" onClick ={() => console.log('click')}>Inicio</buttom>
                    <buttom className="NavBarButtom" onClick ={() => console.log('click')}>Productos</buttom>
                    <buttom className="NavBarButtom" onClick ={() => console.log('click')}>Contacto</buttom>
                </div>
                
            </div>
        </nav>

    )

}


export default NavBar