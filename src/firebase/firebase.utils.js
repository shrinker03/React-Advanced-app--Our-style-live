import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgFPhPvnlKJJCzjYQJaIT_TBJ6FkHu4Xo",
    authDomain: "crwn-dbs-4feaa.firebaseapp.com",
    projectId: "crwn-dbs-4feaa",
    storageBucket: "crwn-dbs-4feaa.appspot.com",
    messagingSenderId: "602566619859",
    appId: "1:602566619859:web:e13752ae286d7140249a26",
    measurementId: "G-RR1QYLZP0K"
}

export const  createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;