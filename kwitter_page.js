//YOUR FIREBASE LINKS
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
      room_name = localStorage.getItem("room_name");

      console.log("room_name" +room_name);
      console.log("user_name" +user_name);

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location.replace("index.html");
      }
      
      function send(){
            var msg=document.getElementById("msg").value;
            console.log("Message" +msg);
            firebase.database().ref(room_name).push({
                  user_name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value="";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



