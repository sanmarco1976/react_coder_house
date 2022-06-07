import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

const CardWidget = () => {

    const { obtenerCantidad } = useContext(CartContext)
    const cantidad = obtenerCantidad()

    return(
        <Link to='/cart' className='divCarro' >
            <img className= 'NavCarrito' src='../Img/carrito.png' alt='cart-widget'/>
            {cantidad}
        </Link>
    )
}

export default CardWidget