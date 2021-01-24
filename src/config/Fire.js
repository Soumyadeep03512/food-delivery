import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBROy2o0Eor4i4jJB9ebLOCNzCW9oWUWeA",
  authDomain: "food-app-react-188b5.firebaseapp.com",
  databaseURL: "https://food-app-react-188b5.firebaseio.com",
  projectId: "food-app-react-188b5",
  storageBucket: "food-app-react-188b5.appspot.com",
  messagingSenderId: "426554115092",
};

const fire = firebase.initializeApp(config);
export default fire;
