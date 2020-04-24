import firebase from 'firebase'
import 'firebase/firestore'

var config = { 
        apiKey: "AIzaSyBs7IphQAXDf4_jGEQ5bqsFvflzGWz8Neo",
        authDomain: "letsask-39153.firebaseapp.com",
        databaseURL: "https://letsask-39153.firebaseio.com",
        projectId: "letsask-39153",
        storageBucket: "letsask-39153.appspot.com",
        messagingSenderId: "998491463531",
        appId: "1:998491463531:web:395922a9e91785d044f62e",
        measurementId: "G-F32DM5023K"
      };

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();