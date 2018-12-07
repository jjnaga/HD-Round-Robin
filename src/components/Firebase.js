import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'phone-round-robin.firebaseapp.com',
    databaseURL: 'https://phone-round-robin.firebaseio.com',
    projectId: 'phone-round-robin',
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
