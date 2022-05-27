import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, stock}) =>{

    return(
        <div className="ItemCard">
            <p className="NombreCard">{nombre}</p>
            <Link to={`/detail/${id}`} className="VerDetalle">Ver Detalle</Link>
        </div>
    )

}

export default Item