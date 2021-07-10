var roomname;
var firebaseConfig = {
    apiKey: "AIzaSyDFgQdFJDVPLcAuK_iwUxwX8ZVGag9zUqM",
    authDomain: "chatappdatabase-53c40.firebaseapp.com",
    databaseURL: "https://chatappdatabase-53c40.firebaseio.com",
    projectId: "chatappdatabase-53c40",
    storageBucket: "chatappdatabase-53c40.appspot.com",
    messagingSenderId: "305363774415",
    appId: "1:305363774415:web:9e353fb364ef572009c0ba",
    measurementId: "G-4BCMLSVZM7"
};
var username = localStorage.getItem("username");
document.getElementById("user").innerHTML = "Welcome "+username;

function add() {
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update(
        {
            class: "A Room"
        }
    );
}

firebase.initializeApp(firebaseConfig);

function back(){
    window.location = "index.html";
}