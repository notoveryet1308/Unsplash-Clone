import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'


// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCFJgXXuJ6AuFa8pcVH3yfnvlAMw6CFmog",
    authDomain: "unsplash-clone-2.firebaseapp.com",
    databaseURL: "https://unsplash-clone-2.firebaseio.com",
    projectId: "unsplash-clone-2",
    storageBucket: "unsplash-clone-2.appspot.com",
    messagingSenderId: "48172777880",
    appId: "1:48172777880:web:1795593a76a70c5cba6bed",
    measurementId: "G-4145ZBMRBT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {
            displayName,
            email,
        } = userAuth;

        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return {
        userRef,
        firebaseInitialized: true
    };
}

export const uploadImagesToUser = async (data) => {
    if (data) {
        console.log(data)
        try {
            const userNode = firestore.doc(`/users/${data.userId}`).collection('allImages').doc(data.imgName);
            await userNode.set({
                imgName: data.imgName,
                imgUrl: data.imgUrl,
                tags: data.tags,
                uploadedAt: data.uploadedAt
            });
            const imageNode = firestore.collection('/images').doc(data.imgName);
            await imageNode.set({
                imgName: data.imgName,
                imgUrl: data.imgUrl,
                tags: data.tags,
                uploadedAt: data.uploadedAt,
                uploadedBy: {
                    userName: data.userName,
                    userId: data.userId
                },

            })
        } catch (err) {
            console.log(err.message)
        }
    }
}




export const uploadLikedImages = async (userId, imgUrl, imgName) => {
    try {
        const likedImg = firestore.doc(`/users/${userId}`).collection('liked-images').doc(imgName);
        await likedImg.set({
            imgUrl,
            imgName
        })
    }catch(err){
        console.error(err)
    }
}
export const signupUsingEmailAndPassword = async (email, password, displayName) => {
    await auth.createUserWithEmailAndPassword(email, password);
    return auth.currentUser.updateProfile({
        displayName
    });
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;