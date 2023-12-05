import { collection, getDocs, addDoc, getFirestore, deleteDoc, doc } from 'firebase/firestore/lite'
import App from '../../firebaseconfig'



const db = getFirestore(App)

const firebaseService = {
    findAll: async (collectionName: string) => {
        const col = await collection(db, collectionName)
        const snapshot = await getDocs(col)
        const doclist = await snapshot.docs.map(doc => {
            const id = doc.id
            const data = doc.data()
            return { ...data, firebaseId: id }
        })
        return [...doclist]
    },
    save: (data: any, collectionName: string) => {
        return addDoc(collection(db, collectionName), data)
    },
    remove: (documentId: any, collectionName: string) => {
        const documentRef = doc(db, collectionName, documentId);
        return deleteDoc(documentRef);
    },
}

export default firebaseService