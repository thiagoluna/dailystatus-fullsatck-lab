import React, { useState, useEffect } from 'react'
import router from 'next/router'
import auth0 from '../lib/auth0'
import axios from 'axios'

const CreateStatus = (props) => {
    
    useEffect(() => {
        if(!props.isAuth){            
            router.push('/')
        }else if(props.forceCreate){
            router.push('/create-status')
        }
    })

    if (!props.isAuth || props.forceCreate) return null;
    const [dados, setDados] = useState({
        status: 'bem',
        coords: {
            lat: null,
            long: null
        }
    })
    const getMyLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                //console.log(position.coords)
                setDados(old => {
                    return {
                        ...old,
                        coords: {
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })
            })
        }
    }
    const onStatusCnahge = evt => {
        const value = evt.target.value
        setDados(old => {
            return {
                ...old,
                status: value
            }
        })
    }
    const save = async() => {
        await axios.post('/api/save-status', dados)
    }
    return (
        <div className='row ml-5'>
            <br/>
            <h1 className='py-4 font-bold text-3xl'>Selecione a opção que melhor define sua situação hoje:</h1>
            1º- Escolha uma das 3 opções abaixo:<br/><br/>
            <label className='block' onClick={onStatusCnahge}>
                <input type='radio' name='status' value='bem'></input> Estou bem e sem sintomas
            </label><br/>
            <label className='block' onClick={onStatusCnahge}>
                <input type='radio' name='status' value='gripe'></input> Estou com sintomas de gripe
            </label><br/>
            <label className='block' onClick={onStatusCnahge}>
                <input type='radio' name='status' value='covid'></input> Estou com sintomas da covid
            </label><br/><br/>          
            {/*JSON.stringify(dados)*/}
            2º- Clique no botão "Informar minha localicação".<br/><br/>
            <button onClick={getMyLocation} className='py-4 px-2 bg-pink-800 font-bold shadow-xl hover:shadow rounded block w-1/4 text-center mx-auto text-white'>
                Informar minha localização&nbsp;
            </button><br/><br/><br/>
            3º- Clique no botão "Salvar".<br/><br/>
            <button onClick={save} className='py-4 px-2 bg-pink-800 font-bold shadow-xl hover:shadow rounded block w-1/6 text-center mx-auto text-white'>
                Salvar&nbsp;
            </button><br/> <br/><br/>
            <p>4º- Para ver o resultado, clique no botão "Ver Resultado".</p><br/>
            <a href='/app' className='py-4 px-2 bg-pink-800 font-bold shadow-xl hover:shadow rounded block w-1/4 text-center mx-auto text-white'>
                Ver Resultado&nbsp;
            </a>   
            <br/><br/>
        </div>
        
    )
}

export default CreateStatus

export async function getServerSideProps ({ req, res }) {
    const session = await auth0.getSession(req)    
    if(session){
        return {
            props: {
                isAuth: true,
                user: session.user,                
            }
        }
    }        
    return {
        props: {
            isAuth: false,
            user: {}
        }
    }
}
