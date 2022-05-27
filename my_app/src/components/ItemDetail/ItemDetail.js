import'./ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({nombre, stock, img, precio, id}) => {
    
    return(
        <div className="Item">
            <h1 className='ItemDetailTitle'>Detalle Del Producto</h1>
            <p className="Nombre">{nombre}</p>
            <img className= 'ImgCard' src={img} alt='cart-widget'/>
            <ul className='UlCard'>
                <li className="PrecioCard">${precio}</li>
                <ItemCount stock={stock}/>
                <button type="button" className="AgregarCard btn btn-outline-warning add" data-id={id} >Agregar Al Carrito</button>
            </ul>
        </div>
        
    )
}

export default ItemDetail