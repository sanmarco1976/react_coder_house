import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext';


function App() {
    return (
        <div className = "App" >
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={"FELIXA"} />}/>
                        <Route path='/detail/:idProducto' element={<ItemDetailContainer greeting={"Productos"} />}/>
                        <Route path='/categoria/:categoria' element={<ItemListContainer greeting={"Productos por categoria"}/>}/>
                        <Route path='/cart'element={<Cart/>}/>
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div >
    );
}

export default App;