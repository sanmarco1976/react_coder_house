import './Cart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import Form from '../Form/Form'

const Cart = () => {

    const { cart, eliminarElemento, total, vaciarCarrito, obtenerCantidad } = useContext(CartContext)
    
    const cantidad = obtenerCantidad()

    if(cantidad === 0){
        return(
            <div>
                <h1 className='TituloH1'>carrito</h1>
                <div className='Div1'>
                    <h2 className='TituloH2'>Carrito Vacio!</h2>
                </div>
                <div className='DivTotalVaciar'>
                    <Link className='LinkComprar' to={`/`}>Comience a Comprar</Link>
                </div>
            </div>
        )
    }

    return(
        <div>
            <h1 className='TituloH1'>carrito</h1>
            <div className='Div1'>
                {cart.map(productos => 
                    <div className="CarritoDiv" key={productos.id}>
                        <div className="Carrito">
                            <div className="DivNombre">{productos.nombre}</div>
                            <div className="DivPrecio">{productos.precio}</div>
                            <div className="DivCount">{productos.count}</div>
                        </div>
                        <img onClick={() => eliminarElemento(productos.id)} className= 'XCarrito' src='../Img/x.png' alt='x'/>
                    </div>)
                }
            </div>
            <div className='DivTotalVaciar'>   
                <p className='TituloP'>Total: ${total}</p>
                <button className='BotonCarrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
            <Form/>
        </div>
    )
}
export default Cart