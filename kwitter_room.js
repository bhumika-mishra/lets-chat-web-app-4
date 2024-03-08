
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDX96lQQN-90yek9JRNViqxV8dFE3ezjUE",
      authDomain: "lets-chat-web-app-1-1c56c.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-1-1c56c-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-1-1c56c",
      storageBucket: "lets-chat-web-app-1-1c56c.appspot.com",
      messagingSenderId: "501175161002",
      appId: "1:501175161002:web:e1d3710d4c0ba3418600d3"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";

      function addroom(){
            Room_name = document.getElementById("roomname").value;
            firebase.database().ref("/").child(Room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("roomname",Room_name);
            window.location="kwitter_page.html";
      }
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
           //Start code
           console.log("roomname:"+Room_names);
           row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML+=row;
           //End code
           });});}
     getData();
     function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}