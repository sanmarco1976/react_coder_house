import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProductsByCategory, obtenerProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) =>{
    const[products, setProducts] = useState([])

    const {categoria} = useParams()
    useEffect (()=>{
        if (!categoria) {
            obtenerProductos().then(response =>{
                setProducts(response)
            })
        }else{
            getProductsByCategory(categoria).then(response =>{
                setProducts(response)
            })
        }
    },[categoria])

    return (
        <div>
            <h1 className='TituloH1'>{props.greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}


export default ItemListContainer