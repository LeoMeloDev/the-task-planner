import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAgf6_u_9H1qB-UVxS6lJlKsrScjHtLojU",
    authDomain: "the-task-planner.firebaseapp.com",
    databaseURL: "https://the-task-planner-default-rtdb.firebaseio.com",
    projectId: "the-task-planner",
    storageBucket: "the-task-planner.appspot.com",
    messagingSenderId: "1025610672306",
    appId: "1:1025610672306:web:68dab2ad387d0d63b801ab",
    measurementId: "G-L0G8JECBV5"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics();

export default firebase;