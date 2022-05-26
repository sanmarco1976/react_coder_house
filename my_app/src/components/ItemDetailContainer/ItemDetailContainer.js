
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState()

    useEffect(() => {
        getProductsById('1').then(response => {
            setProductos(response)
        })
    },[])

    return(
        <ItemDetail nombre={productos?.nombre} img={productos?.img} precio={productos?.precio} id={productos?.id} stock={productos?.stock}/>
    )
}

export default ItemDetailContainer