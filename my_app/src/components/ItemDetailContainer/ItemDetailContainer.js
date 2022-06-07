
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState()

    const [loading, setLoading] = useState(true)

    const {idProducto} = useParams()

    useEffect(() => {
        getProductsById(idProducto).then(response => {
            setProductos(response)
        }).finally(()=>{
            setLoading(false)
        })
    },[idProducto])

    if(loading){
        return <h1 className='TituloH1' >Cargando ...</h1>
    }

    return(
        <ItemDetail {...productos}/>
    )
}

export default ItemDetailContainer