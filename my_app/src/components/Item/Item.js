import './Item.css'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({id, nombre, precio, img}) =>{

    return(
        <div class="ItemCard">
            <p class="NombreCard">{nombre}</p>
            <img className= 'ImgCard' src={img} alt='cart-widget'/>
            <ul className='UlCard'>
                <li class="PrecioCard">${precio}</li>
                <ItemCount />
                <button type="button" class="AgregarCard btn btn-outline-warning add" data-id={id} onClick ={() => console.log('click')}>Agregar Al Carrito</button>
            </ul>
        </div>
    )

}

export default Item