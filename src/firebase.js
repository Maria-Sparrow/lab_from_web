import firebase from "firebase";
import "firebase/database";

let config = {
 
        apiKey: "AIzaSyB06j96sTKzyHe0tJZ5aESQWhQ8mnFdjjo",
        authDomain: "web-labs-26dc7.firebaseapp.com",
        databaseURL: "https://web-labs-26dc7.firebaseio.com"
      
};

firebase.initializeApp(config);
console.log("coooool")
export default firebase.database();