import { useContext } from "react"
import { Context } from "../../App"

const CardWidget = () => {

    const { obtenerCantidad } = useContext(Context)
    const cantidad = obtenerCantidad()

    return(
        <div className='divCarro' >
            <img className= 'NavCarrito' src='../Img/carrito.png' alt='cart-widget'/>
            {cantidad}
        </div>
    )
}

export default CardWidget