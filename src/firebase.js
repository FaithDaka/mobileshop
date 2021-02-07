import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBCzIyA-CBnfUeHkRn8039Wj7vx2I2vqho",
    authDomain: "mobile-shop-53d72.firebaseapp.com",
    databaseURL: "https://mobile-shop-53d72.firebaseio.com",
    projectId: "mobile-shop-53d72",
    storageBucket: "mobile-shop-53d72.appspot.com",
    messagingSenderId: "546863509317",
    appId: "1:546863509317:web:9c642c250981c18f5c982c",
    measurementId: "G-WK3X90VEFJ"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

  export  {
    storage, firebase as default
  }