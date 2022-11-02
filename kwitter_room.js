// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDD4B-9HluYaY0iRFG_nyv6rPE-JtuWckE",
    authDomain: "kwitter-cdd9e.firebaseapp.com",
    databaseURL: "https://kwitter-cdd9e-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdd9e",
    storageBucket: "kwitter-cdd9e.appspot.com",
    messagingSenderId: "697508715180",
    appId: "1:697508715180:web:395175b91ae8e418991d09"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
    window.location.replace("kwitter_page.html");
  
  }
  
  
  
  //AÑADE TUS ENLACES DE FIREBASE
  
  function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Inicio del código
  console.log("Room Name - " + Room_names);
  row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
   //Final del código
   });});}
  getRoom();
  
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }
  
  
  function redirectToRoomName(Room_names) {
    console.log(Room_names);
    localStorage.setItem("room_name", Room_names);
    window.location = "kwitter_page.html";
  }