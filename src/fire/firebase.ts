// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs, doc} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDMi8dAqyRLdwMkZ9tjW_B_FCXhQ3KU6ig',
    authDomain: 'w-picks.firebaseapp.com',
    projectId: 'w-picks',
    storageBucket: 'w-picks.appspot.com',
    messagingSenderId: '113164344816',
    appId: '1:113164344816:web:c7623ddcb458701fec5135',
    measurementId: 'G-ENRBB0GPZ3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const getPicks = async () => {
    const picksColl = collection(db, 'Picks');
    const picksSnap = await getDocs(picksColl);
    const picksList = picksSnap.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        }
    });
    return picksList;
}

export const getMatchups = async () => {
    const matchupsColl = collection(db, 'Matchups');
    const matchupsSnap = await getDocs(matchupsColl);
    const matchupsList = matchupsSnap.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        }
    });
    return matchupsList;
}

export const getUsers = async () => {
    const usersColl = collection(db, 'Users');
    const usersSnap = await getDocs(usersColl);
    const usersList = usersSnap.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        }
    });
    return usersList;
}