import React, {createContext, useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Cart from './components/Cart/Cart';

export const Context = createContext()

function App() {

    const[cart, setCart] = useState([])
    console.log(cart)

    const agregarItem = (productoParaAgregar) =>{
        setCart([...cart, productoParaAgregar])
    }

    const obtenerCantidad = () =>{
        let acumulador = 0
        cart.forEach(prod => {
            acumulador = acumulador + prod.count
        })
        return acumulador
    }

    return (
        <div className = "App" >
            <Context.Provider value={{cart, agregarItem, obtenerCantidad}}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={"FELIXA"} />}/>
                        <Route path='/detail/:idProducto' element={<ItemDetailContainer greeting={"Productos"} />}/>
                        <Route path='/categoria/:categoria' element={<ItemListContainer greeting={"Productos por categoria"}/>}/>
                        <Route path='/cart'element={<Cart/>}/>
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div >
    );
}

export default App;