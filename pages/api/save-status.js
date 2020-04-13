import { db } from '../../lib/db'
import admin from 'firebase-admin'
import auth0 from '../../lib/auth0'

const sateStatus = async (request, response) => {
    //Verifica se está logado
    const session = await auth0.getSession(request)
    if (session){
        //armazena dados do form na const dados
        const dados = request.body
        const today = new Date()        
        const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate()
        await db //grava no banco
        .collection('markers')
        .doc(currentDate)
        .collection('checks')
        .doc(session.user.sub)
        .set({
            status: dados.status,
            user: session.user.sub,
            coordinates: new admin.firestore.GeoPoint(dados.coords.lat, dados.coords.long)
        })
    }      
    //console.log(request.body)  
    response.send({ ok: true })      
}

export default sateStatus