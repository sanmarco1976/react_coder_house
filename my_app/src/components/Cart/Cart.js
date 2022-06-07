import './Cart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"


const Cart = () => {

    const { cart, eliminarElemento } = useContext(CartContext)

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
        </div>
    )
}
export default Cart