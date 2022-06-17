
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState()

    const [loading, setLoading] = useState(true)

    const {idProducto} = useParams()

    useEffect(() => {

        getDoc(doc(db, 'productos', idProducto)).then(response =>{
            const productos = { id: response.id, ...response.data()}
            setProductos(productos)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
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