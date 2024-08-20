import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRdoT6yvKnoVggv9yUXDY2nt8sMPyKUag",
  authDomain: "crwnshop-v2.firebaseapp.com",
  projectId: "crwnshop-v2",
  storageBucket: "crwnshop-v2.appspot.com",
  messagingSenderId: "712963372750",
  appId: "1:712963372750:web:14b450244c41a4a27e029f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_auth"
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDocumentFromAuth= async (userAuth)=>{
    const userDocRef =doc(db, "users", userAuth.uid);
    console.log(userDocRef);
    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email}=userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log(error.message);
            }
    }
    return userDocRef;
}