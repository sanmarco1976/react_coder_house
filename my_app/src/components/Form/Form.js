import './Form.css'
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({compardor, setComprador}) => {
    const{ register,formState:{ errors },handleSubmit } = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    }

    return (
        <div>
            <h2 className='TituloH1'>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='NombreForm'>
                    <label className='TituloH1'>Nombre</label>
                    <input type='text' {...register('nombre',{
                        required: true
                    })} />
                    {errors.nombre?.type === 'required' && <p className='Alerta'>El campo nombre es requerido</p>}
                </div>
                <div className='Email'>
                    <label className='TituloH1'>Email</label>
                    <input type='email' {...register('email',{
                        required: true
                    })} />
                    {errors.email?.type === 'required' && <p className='Alerta'>El campo Email es requerido</p>}
                </div>
                <div className='Telefono'>
                    <label className='TituloH1'>Telefono</label>
                    <input type='number' {...register('telefono',{
                        required: true
                    })} />
                    {errors.telefono?.type === 'required' && <p className='Alerta'>El campo Telefono es requerido</p>}
                </div>
                <input className='EnviarForm' type='submit' value='Enviar' />
            </form>
        </div>
    
    );
}
export default Form