import React, { ChangeEvent } from 'react'
import { InputStyled } from './Input.style'

interface IInput{
    label: string;
    type:string;
    name:string;
    value:string | number | string[] | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
    onBlur: ()=>void;
}

function Input({label, type, name, value, onChange, error, onBlur }: IInput):JSX.Element{
    return(
        <InputStyled>
            <label className='label' htmlFor={name}>{label}</label>
            <input 
                className='input' 
                id={name} name={name} 
                type={type} 
                onChange={onChange} 
                value={value}
                onBlur={onBlur}/>
            {error && <p className='errorMessage'>{error}</p>}          
        </InputStyled>
    )
}

export default Input