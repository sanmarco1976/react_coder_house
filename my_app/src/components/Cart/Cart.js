import './Cart.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useNotificacion } from '../../notificacion/Notificacion'

const Cart = () => {

    const { cart, eliminarElemento, total, vaciarCarrito, obtenerCantidad } = useContext(CartContext)
    const cantidad = obtenerCantidad()

    const[loading, setLoading] = useState(false)

    const {setNotificacion} = useNotificacion()
    
    const[compardor, setComprador] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })
    
    const crearOrden = () =>{
        setLoading(true)
        const objOrden = {
            compardor,
            items: cart, 
            total: total
        }

        const batch = writeBatch(db)

        const sinStock = []

        const ids = cart.map(prod => prod.id)

        const collectionRef2 = collection(db, 'productos')

        getDocs(query(collectionRef2, where(documentId(),'in', ids))).then(response =>{
            response.docs.forEach(doc =>{
                const dataDoc = doc.data()
                const prodCant = cart.find(prod => prod.id === doc.id)?.count

                if(dataDoc.stock >= prodCant){
                    batch.update(doc.ref, { stock: dataDoc.stock - prodCant})
                } else{
                    sinStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(sinStock.length === 0){
                const collectionRef = collection(db, 'orden')
                return addDoc(collectionRef, objOrden)
            } else {
                return Promise.reject({ type: 'sin stock', productos: sinStock})
            }
        }).then(({ id }) =>{
            batch.commit()
            setNotificacion('success',`el id de su orden es ${id}`)
            vaciarCarrito()
        }).catch(error =>{
            console.log(error)
            setNotificacion('error',`Algunos productos no tienen stock`)
        }).finally(() => {
            setLoading(false)
        })
        
    }

    if(loading){
        return <h1 className='TituloH1'>Generando su orden...</h1>
    }

    if(cantidad === 0){
        return(
            <div>
                <h1 className='TituloH1'>carrito</h1>
                <div className='Div1'>
                    <h2 className='TituloH2'>Carrito Vacio!</h2>
                </div>
                <div className='DivTotalVaciar'>
                    <Link className='LinkComprar' to={`/`}>Comience a Comprar</Link>
                </div>
            </div>
        )
    }

    return(
        <div>
            <h1 className='TituloH1'>carrito</h1>
            <div className='Div1'>
                {cart.map(productos => 
                    <div className="CarritoDiv" key={productos.id}>
                        <div className="Carrito">
                            <div className="DivNombre">{productos.nombre}</div>
                            <div className="DivPrecio">{productos.precio}</div>
                            <div className="DivCount">{productos.count}</div>
                        </div>
                        <img onClick={() => eliminarElemento(productos.id)} className= 'XCarrito' src='../Img/x.png' alt='x'/>
                    </div>)
                }
            </div>
            <div className='DivTotalVaciar'>   
                    <p className='TituloP'>Total: ${total}</p>
                    <button className='VaciarCarrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <button className='VaciarCarrito' onClick={crearOrden}>Generar Orden</button>
                    <Link to='/form' className='VaciarCarrito'>Llenar Formulario</Link>
            </div>
        </div>
    )
}
export default Cart