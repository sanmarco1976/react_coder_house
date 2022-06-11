import'./ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { useNotificacion } from '../../notificacion/Notificacion'

const ItemDetail = ({nombre, stock, img, precio, id}) => {

    const [count, setQuantity ] = useState(0)

    const {agregarItem, obtenerProductos} = useContext(CartContext)
    
    const { setNotificacion } = useNotificacion()

    const agregarCarrito = (count) =>{
        setQuantity(count)
        setNotificacion('succes', 'Se agrego el producto correctamente!')
        agregarItem({id, nombre, precio, count})
    }

    return(
        <div className="Item">
            <h1 className='ItemDetailTitle'>Detalle Del Producto</h1>
            <p className="Nombre">{nombre}</p>
            <img className= 'ImgCard' src={img} alt='cart-widget'/>
            <ul className='UlCard'>
                <li className="PrecioCard">${precio}</li>
                {count > 0 
                    ? <Link to='/cart' className='FinlizarCompra'>Finalizar Compra</Link> 
                    :<ItemCount stock={stock} onConfirm = {agregarCarrito} inicial ={obtenerProductos(id)?.count} />
                }
            </ul>
        </div>
        
    )
}

export default ItemDetail