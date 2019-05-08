import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBFYpzRcSw0xvqMTqVrElJQzwpHfah9D-w",
  authDomain: "expensify-f1e80.firebaseapp.com",
  databaseURL: "https://expensify-f1e80.firebaseio.com",
  projectId: "expensify-f1e80",
  storageBucket: "expensify-f1e80.appspot.com",
  messagingSenderId: "133855885693",
  appId: "1:133855885693:web:f218b0c7808aa546"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: 'Nacho Dog'
})