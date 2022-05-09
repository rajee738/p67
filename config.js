import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

        apiKey: "AIzaSyAzFttK0kQL8zbBGQKwRW6u2HSAirXmBjM",
        authDomain: "voting-d7db4.firebaseapp.com",
        projectId: "voting-d7db4",
        storageBucket: "voting-d7db4.appspot.com",
        messagingSenderId: "894791700168",
        appId: "1:894791700168:web:416b4d09fd2d3e17ec9ffd"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();