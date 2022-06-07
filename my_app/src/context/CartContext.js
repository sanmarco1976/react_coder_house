import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    
    const agregarItem = (productoParaAgregar) =>{
        if (!estaEnCarrito(productoParaAgregar.id)) {
            setCart([...cart, productoParaAgregar])
        }
        else{
            const newCart = cart.map(prod =>{
                if(prod.id === productoParaAgregar.id){
                    const newProduct = {
                        ...prod,
                        count : productoParaAgregar.count
                    }
                    return newProduct
                }
                else{
                    return prod
                }
            })
            setCart(newCart)
        }
    }

    const obtenerCantidad = () =>{
        let acumulador = 0
        cart.forEach(prod => {
            acumulador = acumulador + prod.count
        })
        return acumulador
    }

    const estaEnCarrito = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const obtenerProductos = (id) =>{
        return cart.find(prod => prod.id === id)
    }

    const eliminarElemento = (id) =>{
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{ cart, agregarItem, obtenerCantidad, obtenerProductos, eliminarElemento }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext