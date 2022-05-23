import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { obtenerProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) =>{
    const[products, setProducts] = useState([])

    useEffect (()=>{
        obtenerProductos().then(response =>{
            setProducts(response)
        })
    })

    return (
        <div>
            <h1 className="TituloH1">{props.greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}


export default ItemListContainer