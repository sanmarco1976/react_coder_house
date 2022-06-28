import './Form.css'
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CartContext from "../../context/CartContext"
import { db } from '../../services/firebase';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { useNotificacion } from '../../notificacion/Notificacion'

const Form = () => {
    const{ register,formState:{ errors },handleSubmit } = useForm();
    const onSubmit = (data, e) =>{
        console.log(data)
        e.target.reset()
        crearOrden()
    }

    const {cart, total, vaciarCarrito} = useContext(CartContext)


    const[compardor, setComprador] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })
    
    const {setNotificacion} = useNotificacion()
    
    const crearOrden = () => {
        const ObjOrden = {
            compardor: compardor,
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
                return addDoc(collectionRef, ObjOrden)
            } else {
                return Promise.reject({ type: 'sin stock', productos: sinStock})
            }
        }).then(({ id }) =>{
            batch.commit()
            setNotificacion('success',
            `Muchas Gracias ${compardor.nombre} Por Su Compra. El id De Su Orden Es ${id}`)
            vaciarCarrito()
        }).catch(error =>{
            setNotificacion('error',`Algunos productos no tienen stock`)
        })
    }
    const handleInputChange = (e) => {
        setComprador({
            ...compardor,
            [e.target.name]: e.target.value
        })
    }
    

    return (
        <div className='Formulario'>
            <h2 className='TituloH1'>Formulario de Compra</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='NombreForm'>
                    <label className='TituloH1'>Nombre</label>
                    <input type='text' {...register('nombre',{
                        required: true
                    })} 
                    onChange={handleInputChange}/>
                    {errors.nombre?.type === 'required' && <p className='Alerta'>El campo nombre es requerido</p>}
                </div>
                <div className='Email'>
                    <label className='TituloH1'>Email</label>
                    <input type='email' {...register('email',{
                        required: true
                    })}
                    onChange={handleInputChange}/>
                    {errors.email?.type === 'required' && <p className='Alerta'>El campo Email es requerido</p>}
                </div>
                <div className='Telefono'>
                    <label className='TituloH1'>Telefono</label>
                    <input type='number' {...register('telefono',{
                        required: true
                    })}
                    onChange={handleInputChange}/>
                    {errors.telefono?.type === 'required' && <p className='Alerta'>El campo Telefono es requerido</p>}
                </div>
                <input className='EnviarForm' type='submit' value='COMPRAR'/>
            </form>
        </div>
    
    );
}
export default Form