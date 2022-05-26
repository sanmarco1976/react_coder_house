import {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);
    
    const aumentarCantidad = () =>{
        if (count < stock){
            setCount((count) => count +1);
        }
    }
    const disminuirCantidad = () =>{
        if(count > 0){
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
        </div>
    )

}

export default ItemCount