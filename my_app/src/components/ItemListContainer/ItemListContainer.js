import './ItemListContainer.css'
import { useEffect, useState } from 'react'
// import { getProductsByCategory, obtenerProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props) =>{
    const[products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const {categoria} = useParams()
    
    useEffect (()=>{
        setLoading(true)

        const collectionRef = categoria
        ? query(collection(db, 'productos'), where('categoria', '==', categoria))
        :collection(db, 'productos')


        getDocs(collectionRef).then(response =>{
            const productos = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(productos)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


        // if (!categoria) {
        //     obtenerProductos().then(response =>{
        //         setProducts(response)
        //     }).finally(()=>{
        //         setLoading(false)
        //     })
        // }else{
        //     getProductsByCategory(categoria).then(response =>{
        //         setProducts(response)
        //     })
        // }
    },[categoria])

    if(loading){
        return <h1 className='TituloH1' >Cargando ...</h1>
    }

    return (
        <div>
            <h1 className='TituloH1'>{props.greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}


export default ItemListContainer