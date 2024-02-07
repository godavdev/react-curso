import React from 'react'

const Historia = ({ imgFondo, imgPerfil, nombrePerfil }) => {
    return (
        <div className='aspect-[9/16] rounded-xl w-72 bg-slate-500 overflow-hidden relative'>
            <img src={imgFondo} />
            <img src={imgPerfil} className='w-[15%] aspect-square rounded-full absolute top-4 left-4 outline outline-blue-800 outline-3' />
            <p className='absolute bottom-4 left-4 text-white font-semibold text-lg'>{nombrePerfil}</p>
        </div>
    )
}

export default Historia