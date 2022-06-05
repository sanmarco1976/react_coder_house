import'./ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Context } from '../../App'

const ItemDetail = ({nombre, stock, img, precio, id, talle}) => {

    const [quantity, setQuantity ] = useState(0)

    const {agregarItem} = useContext(Context)

    const agregarCarrito = (count) =>{
        console.log('agrrgeue')
        setQuantity(count)
        agregarItem({id, nombre, precio, count})
        
    }

    return(
        <div className="Item">
            <h1 className='ItemDetailTitle'>Detalle Del Producto</h1>
            <p className="Nombre">{nombre}</p>
            <img className= 'ImgCard' src={img} alt='cart-widget'/>
            <ul className='UlCard'>
                <li className="PrecioCard">${precio}</li>
                {quantity > 0 ? <Link to='/cart' className='FinlizarCompra'>Finalizar Compra</Link> :<ItemCount stock={stock} onConfirm = {agregarCarrito}/>}
            </ul>
        </div>
        
    )
}

export default ItemDetail