import {useState} from 'react'
import './ItemCount.css'

const ItemCount = () => {
    const [count, setCount] = useState(0);
    
    const aumentarCantidad = () =>{
        setCount((count) => count +1);
    }

    const disminuirCantidad = () =>{
        if(count > 0){
            setCount((count) => count -1);
        }
    }

    return(
        <div className='divCount'>
            <img className= 'CountImagen' src='../Img/conj_ana2.jpg' alt='cart-widget'/>
            <div className='divButton'>
                <button className='Button' onClick={disminuirCantidad}>-</button>
                <p className='PCount'>{count}</p>
                <button className='Button' onClick={aumentarCantidad}>+</button>
            </div>
        </div>
    )

}

export default ItemCount