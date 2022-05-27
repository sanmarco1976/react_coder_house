
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState()
    const {idProducto} = useParams()
    useEffect(() => {
        getProductsById(idProducto).then(response => {
            setProductos(response)
        })
    },[idProducto])

    return(
        <ItemDetail {...productos}/>
    )
}

export default ItemDetailContainer