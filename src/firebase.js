import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB33zri7XyR_MqU4TwMtFj3eJSylmhLHR4',
  authDomain: 'twiter-clone-43012.firebaseapp.com',
  databaseURL: 'https://twiter-clone-43012.firebaseio.com',
  projectId: 'twiter-clone-43012',
  storageBucket: 'twiter-clone-43012.appspot.com',
  messagingSenderId: '1080079838835',
  appId: '1:1080079838835:web:20b56e6040365b11720406',
  measurementId: 'G-QGSSJR10X6',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
