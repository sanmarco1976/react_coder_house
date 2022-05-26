import './Item.css'

const Item = ({id, nombre, precio, img, stock}) =>{

    return(
        <div className="ItemCard">
            <p className="NombreCard">{nombre}</p>
            <button>Ver Detalle</button>
        </div>
    )

}

export default Item