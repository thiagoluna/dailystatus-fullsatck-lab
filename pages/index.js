import React from 'react'

const Index = () => {
    return (
        <div className='row'>
            <div className='text-center mx-auto py-8 font-bold'>
                Mantenha-se protegido.<br/>
                Sua comunidade também.
            </div>
            <div className='text-center mx-auto py-6 font-bold'>
                Compartilhe<br/>
                como você está.
            </div>
            <div className='text-center mx-auto py-6 font-bold'>
                Veja como <br/>           
                pessoas ao seu<br/>
                redor estão.
            </div>
            <a href='/api/login' className='py-4 px-2 bg-pink-800 font-bold shadow-xl hover:shadow rounded block w-1/4 text-center mx-auto text-white'>
                Comece por aqui
            </a>
        </div>    
    )
}

export default Index