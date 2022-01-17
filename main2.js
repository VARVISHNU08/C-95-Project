// Your web app's Firebase configuration

var firebaseConfig = {

  apiKey: "AIzaSyACYdQs6Q4vCDFQQUGUU9Tlbky4QgJe9D8",

  authDomain: "c-94-project-a97e9.firebaseapp.com",

  databaseURL: "https://c-94-project-a97e9-default-rtdb.firebaseio.com",

  projectId: "c-94-project-a97e9",

  storageBucket: "c-94-project-a97e9.appspot.com",

  messagingSenderId: "512258789652",

  appId: "1:512258789652:web:1b899185c0ec5b464d7201"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function show(){
    user_name = localStorage.getItem("user_nm");
    document.getElementById("srNm").innerHTML = user_name;
    
}

function logOut(){
    window.location = "index.html";
}
function signOut(){
    localStorage.setItem("user_nm", "user_nm");
    localStorage.setItem("user_nm", "user_nm");
    window.location = "index.html";
}



function addRoom(){

    room_name = document.getElementById("rmNmNpt").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
//End code
});});}
getData();

function redirectToRoomname(name){
  console.log(name);
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}