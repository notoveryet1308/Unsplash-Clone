import React from 'react'
import { InputField } from './InputStyle';

function Input({heroSearch}) {
    return (
        <InputField 
        placeholder='Search free high-resolution photos'
        heroSearch={heroSearch ? 'true': 'false'}
     />
    )
}

export default Input;
