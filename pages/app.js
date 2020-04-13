import React, { useEffect } from 'react'
import auth0 from '../lib/auth0'
import router from 'next/router'
import { db } from '../lib/db'
import { distance } from '../lib/geo'

const App = (props) => {
    useEffect(() => {
        if(!props.isAuth){            
            router.push('/')
        }else if(props.forceCreate){
            router.push('/create-status')
        }
    })

    if (!props.isAuth || props.forceCreate) return null;

    return (
        <div className='row ml-5'>               
            <h1 className='py-4 font-bold text-3xl'>Status de pessoas próximas a você</h1>
            A tabela abaixo apresenta a relação de todas as pessoas que informaram<br/>
            como estão se sentindo hoje e que estão no raio de 1 km de distância de você.<br/><br/>
            <table className='table-auto'>
                <thead>
                <tr>
                    <th className='px-4 py-2'>ID</th>
                    <th className='px-4 py-2'>Status</th>
                    <th className='px-4 py-2'>Distância de você</th>
                    <th className='px-4 py-2'>Coordenadas</th>                    
                </tr>
                </thead>
                <tbody>
                { props.checkins.map(checkin => {
                    return (
                        <tr>
                           <td className='border px-4 py-2'>{checkin.id === props.user.sub && 'Esse sou eu'}</td> 
                           <td className='border px-4 py-2'>
                            {checkin.status === 'bem' && 'Está bem e sem sintomas'}
                            {checkin.status === 'gripe' && 'Está com sintomas de gripe'}
                            {checkin.status === 'covid' && 'Está com sintomas da covid-19'}
                           </td> 
                           <td className='border px-4 py-2'>{checkin.distance} km</td> 
                           <td className='border px-4 py-2'>
                               Lat: {JSON.stringify(checkin.coords.lat)}<br/>
                               Long: {JSON.stringify(checkin.coords.long)}
                            </td> 
                        </tr>
                    )
                })}
                </tbody>
            </table><br/><br/><br/>
            {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
        </div>        
    )
}

export default App

export async function getServerSideProps ({ req, res }) {
    const session = await auth0.getSession(req)
    console.log(session)
    if(session){
        const today = new Date()        
        const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate()
        const todaysCheckin = await db
            .collection('markers')
            .doc(currentDate)
            .collection('checks')
            .doc(session.user.sub)
            .get()

        const todaysData = todaysCheckin.data()
        let forceCreate = true
        if (todaysData){
            //pode ver os outros checkins
            forceCreate = false
            const checkins = await db
                .collection('markers')
                .doc(currentDate)
                .collection('checks')
                .near({
                    center: todaysData.coordinates,
                    radius: 1000
            })
            .get()
            const checkinsList = []
            checkins.docs.forEach(doc => {
                checkinsList.push({                    
                    id: doc.id,
                    status: doc.data().status,
                    coords: {
                        lat: doc.data().coordinates.latitude,
                        long: doc.data().coordinates.longitude
                    },
                    distance: distance(
                        todaysData.coordinates.latitude, 
                        todaysData.coordinates.longitude, 
                        doc.data().coordinates.latitude,
                        doc.data().coordinates.longitude
                    ).toFixed(2)
                })
            })
            return {
                props: {
                    isAuth: true,
                    user: session.user,
                    forceCreate: false,
                    checkins: checkinsList
                }
            }
        }        

        return {
            props: {
                isAuth: true,
                user: session.user,
                forceCreate
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