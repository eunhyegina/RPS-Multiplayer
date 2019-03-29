var config = {
  apiKey: "AIzaSyAJCzlxNxroX-lTpEaOZxJXLtjvhu3aOcQ",
  authDomain: "trainschedule-da4aa.firebaseapp.com",
  databaseURL: "https://trainschedule-da4aa.firebaseio.com/",
  projectId: "trainschedule-da4aa",
  storageBucket: "trainschedule-da4aa.appspot.com",
  messagingSenderId: "330636587972"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#addTrain").on("click", function(event) {
event.preventDefault();


//train info
var train = ("#inputTrain").val().trim();
var destination = ("#inputDest").val().trim();
var firstTrain = ("#inputTime").val().trim();
var frequency = ("#inputFreq").val().trim();

var trainInfo = {
  name: train,
  dest: destination,
  first: firstTrain,
  freq: frequency
};
database.ref().push(trainInfo);

console.log(trainInfo.train);
console.log(trainInfo.firstTrain);

//clear input

$("#inputTrain").val("");
$("#inputDest").val("");
$("#inputTime").val("");
$("#inputFreq").val("");

});

database.ref().on("child_added", function(childSnapshot) {
var train = childSnapshot.val().name;
var destination = childSnapshot.val().dest;
var firstTrain = childSnapshot.val().first;
var frequency = childSnapshot.val().freq;

console.log(name);
//first
var firstTimeConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
console.log(firstTimeConverted);

//current time
var currentTime = moment();
//difference
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

var tMinutesTillTrain = tFrequency - tRemainder;
console.log("minutes till train: " + tMinutesTillTrain);

var nextTrain = moment().add(tMiutesTillTrain, "minutes");

$("#tn").append(train);
$("#ds").append(destination);
$("#fr").append(firstTrain);
$("#na").append(nextTrain);
$("#ma").append(tMinutesTillTrain);

})


