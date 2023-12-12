import { collection, getDocs, addDoc, getFirestore, deleteDoc, doc } from 'firebase/firestore/lite';
import App from '../../firebaseconfig';

const db = getFirestore(App);

const firebaseService = {
    findAll: async (collectionName: string) => {
        const col = collection(db, collectionName);
        const snapshot = await getDocs(col);
        const doclist = snapshot.docs.map(doc => {
            const id = doc.id;
            const data = doc.data();
            return { ...data, firebaseId: id };
        });
        return [...doclist];
    },
    save: (data: any, collectionName: string) => {
        return addDoc(collection(db, collectionName), data);
    },
    remove: (documentId: any, collectionName: string) => {
        const documentRef = doc(db, collectionName, documentId);
        return deleteDoc(documentRef);
    },
    removerDocumento: (collectionName: string, documentId: any) => {
        const docRef = doc(db, collectionName, documentId);

        return deleteDoc(docRef)
            .then(() => {
                console.log("Documento removido com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao remover o documento:", error);
            });
    },
    removerTodosDocumentos: async (collectionName: string) => {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.forEach(async (doc) => {
            const documentRef = doc(db, collectionName, doc.id);
            await deleteDoc(documentRef);
        });

        console.log("Todos os documentos foram removidos com sucesso da coleção", collectionName);
    },
    somarPrecosNaColecao: async (collectionName:string) => {
        const col = collection(db, collectionName);
        const snapshot = await getDocs(col);

        let somaTotal = 0;

        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.Price && typeof data.Price === 'number') {
                somaTotal += data.Price;
            }
        });

        console.log("A soma de todos os valores do campo 'Price' na coleção", collectionName, "é:", somaTotal);
        return somaTotal;
    }
};

export default firebaseService;
