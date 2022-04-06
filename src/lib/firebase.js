    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getFirestore } from 'firebase/firestore';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyD6EY04rteTN0HWmOgP3pehny22hgM9bEM",
        authDomain: "alpha-43515.firebaseapp.com",
        projectId: "alpha-43515",
        storageBucket: "alpha-43515.appspot.com",
        messagingSenderId: "412082119633",
        appId: "1:412082119633:web:87a7ca24d1f488725676f0"
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);

    export const db = getFirestore(app);

    