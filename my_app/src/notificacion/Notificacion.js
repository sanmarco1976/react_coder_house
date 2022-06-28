import { createContext, useContext, useState } from "react";


const Notificacion = ({mensaje, severity}) =>{

    const notificacionEstilo = {
        position : 'absolute',
        top: 150,
        right: 5,
        width: 'auto',
        heigth: 'auto',
        backgroundColor : severity === 'error' ? 'red' : '#f4e3d3',
        padding: '10px 20px 10px 20px',
        color:  severity === 'error' ? '#f4e3d3' : '#7d5f56',
        borderRadius: 3,
        fontSize: '1rem',
    }

    if(mensaje === ''){
        return
    }

    return(
        <div style={notificacionEstilo}>
            {mensaje}
        </div>
    )
}

const NotificacionContext = createContext()

export const NotificacionProvider = ({ children }) =>{
    const [mensaje, setMensaje] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotificacion = (severity, mensaje) =>{
        setMensaje(mensaje)
        setSeverity(severity)
        setTimeout(() => {
            setMensaje('')
        },6000)
    }

    return(
        <NotificacionContext.Provider value={{ setNotificacion }}>
            <Notificacion mensaje={mensaje} severity={severity}/>
            { children }
        </NotificacionContext.Provider>
    )
}

export const useNotificacion =  () =>{
    return useContext(NotificacionContext)
}