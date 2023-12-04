import { collection, getDocs,addDoc, getFirestore } from 'firebase/firestore/lite'
import App from '../../firebaseconfig'



const db = getFirestore(App)

const firebaseService = {
    findAll: async (collectionName: string) => {
        const col = await collection(db, collectionName)
        const snapshot = await getDocs(col)
        const doclist = await snapshot.docs.map(doc => doc.data())
        return doclist
    },
    save: (data: any, collectionName: string) => {
        return addDoc(collection(db,collectionName),data)
    }
}

export default firebaseService