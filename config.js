import firebase from "firebase"; 

var firebaseConfig = {
  apiKey: "AIzaSyBV_JOM1oLzQEqMSuQC5hytIRxVpFqFIvA",
  authDomain: "school-attendance-app-632eb.firebaseapp.com",
  databaseURL: "https://school-attendance-app-632eb.firebaseio.com",
  projectId: "school-attendance-app-632eb",
  storageBucket: "school-attendance-app-632eb.appspot.com",
  messagingSenderId: "163482921564",
  appId: "1:163482921564:web:7825b07908ce58824d9499",
  measurementId: "G-B92L24Z9SD"
};

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
