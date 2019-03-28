var config = {
    apiKey: "AIzaSyBmjXHi3IfNCkn0e193jKCbvoE2L-MHHig",
    authDomain: "rps-multi-8ab2b.firebaseapp.com",
    databaseURL: "https://rps-multi-8ab2b.firebaseio.com",
    projectId: "rps-multi-8ab2b",
    storageBucket: "rps-multi-8ab2b.appspot.com",
    messagingSenderId: "761465442485"
  };
firebase.initializeApp(config);

var database = firebase.database();
var connectionsRef = database.ref("/connections");




