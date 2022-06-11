import {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, inicial= 1, onConfirm}) => {
    const [count, setCount] = useState(inicial);

    const aumentarCantidad = () =>{
        if (count < stock){
            setCount((count) => count +1);
        }
    }
    const disminuirCantidad = () =>{
        if(count > 1){
            setCount((count) => count -1);
        }
    }

    return(
        <div className='divCount'>
            <div className='divButton'>
                <button className='Button' onClick={disminuirCantidad}>-</button>
                <p className='PCount'>{count}</p>
                <button className='Button' onClick={aumentarCantidad}>+</button>
            </div>
            <button className='AgregarCard' onClick={() => onConfirm(count)}>Agregar Al Carrito</button>
        </div>
    )

}

export default ItemCount