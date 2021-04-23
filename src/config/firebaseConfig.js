import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// var firebaseConfig = {
//   apiKey: "AIzaSyB5nMtLlWC9TaNamN3SWO-1sozXbeih2do",
//   authDomain: "todo-d1b7e.firebaseapp.com",
//   databaseURL: "https://todo-d1b7e.firebaseio.com",
//   projectId: "todo-d1b7e",
//   storageBucket: "todo-d1b7e.appspot.com",
//   messagingSenderId: "456019758360",
//   appId: "1:456019758360:web:928bbecc2dab4b313d226d",
// };

var firebaseConfig = {
  apiKey: "AIzaSyC_lSYnf5GZxKzHH9oxbPUiR7gL8l1a4e4",
  authDomain: "todo-app-e750f.firebaseapp.com",
  databaseURL: "https://todo-app-e750f-default-rtdb.firebaseio.com",
  projectId: "todo-app-e750f",
  storageBucket: "todo-app-e750f.appspot.com",
  messagingSenderId: "174180228716",
  appId: "1:174180228716:web:165d30ef30e55cd036c249"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
