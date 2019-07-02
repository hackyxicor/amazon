import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsHgM51JwkW9Ce8fXF9gkmLtStpb2EzVc",
    authDomain: "phish-bdd84.firebaseapp.com",
    databaseURL: "https://phish-bdd84.firebaseio.com",
    projectId: "phish-bdd84",
    storageBucket: "",
    messagingSenderId: "919816183031",
    appId: "1:919816183031:web:290bf2fc4b3dd690"
};

firebase.initializeApp(firebaseConfig);

export default firebase;