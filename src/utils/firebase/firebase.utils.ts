// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot
} from 'firebase/firestore';
import { CategoryType } from "../../store/categories/categories.types";

type ObjectToAddType = {
    title: string;
   
}


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcY3JYSPARYlZ5imApGcQK1zIM4nk_1Ok",
  authDomain: "ztm-e-shop-db.firebaseapp.com",
  projectId: "ztm-e-shop-db",
  storageBucket: "ztm-e-shop-db.appspot.com",
  messagingSenderId: "842959145600",
  appId: "1:842959145600:web:cfeca9be310ad0034f3465"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const addCollectionAndDocuments = async <T extends ObjectToAddType> (collectionKey:string, objectsToAdd:T[]): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {

        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    });

    await batch.commit();
    console.log('Done adding Collections and Documents to firebase');
};

export const getCategoriesAndDocuments = async (): Promise<CategoryType[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querrySnapshot = await getDocs(q);
    
    return querrySnapshot.docs.map(docSnapshot => docSnapshot.data() as CategoryType);

    // const categoryMap = querrySnapshot.docs.reduce((acc, docSnaoshot) => {
    //     const {title, items} = docSnaoshot.data();
    //     acc[title.toLowerCase()] = items;
    //     return acc;
    // }, {});

    // return categoryMap;
}

export type AdditionalInformationType = {
    displayName?: string;
}

export type UserDataType = {
    createdAt: Date;
    displayName: string;
    email: string;
}

export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {} as AdditionalInformationType
    ): Promise<void | QueryDocumentSnapshot<UserDataType> > => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch(error){
            console.log('error creating the user', error);
        }
    }

    return userSnapshot as QueryDocumentSnapshot<UserDataType>;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthWithEmailAndPassword = async (email: string, password: string) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const OnAuthStateChangeListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)