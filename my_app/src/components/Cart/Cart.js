import { useContext } from "react"
import { Context } from "../../App"


const Cart = () => {

    const { cart } = useContext(Context)

    return(
        <div>
            <h1 className='TituloH1'>carrito</h1>
            <div>
                {cart.map(productos => <div key={productos.id}>
                    <p>{productos.nombre}</p>
                    <p>{productos.precio}</p>
                    <p>{productos.count}</p>
                </div>)}
            </div>
        </div>
    )
}
export default Cart