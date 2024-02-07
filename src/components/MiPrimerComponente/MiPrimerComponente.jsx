import React, { useState } from 'react'

const MiPrimerComponente = ({ nombre, saludo }) => {
    //Aqui dentro es la logica del componente
    //HTML que retorna
    const [contador, setContador] = useState(0)

    const add = () => {
        setContador(contador + 1)
    }

    const remove = () =>{
        setContador(contador - 1)
    }

    return (
        <div
            onClick={remove}
            className='w-48 aspect-square bg-purple-800 text-white text-5xl'>{saludo}, {nombre}, {contador}</div>
    )
}

export default MiPrimerComponente