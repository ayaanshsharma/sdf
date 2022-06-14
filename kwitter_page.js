var firebaseConfig = {
      apiKey: "AIzaSyC5kMZ7wvJpLAT9u7Z8YBKV59XjF-aqqRE",
      authDomain: "project-93-letschat-web-app-1.firebaseapp.com",
      databaseURL: "https://project-93-letschat-web-app-1-default-rtdb.firebaseio.com",
      projectId: "project-93-letschat-web-app-1",
      storageBucket: "project-93-letschat-web-app-1.appspot.com",
      messagingSenderId: "599747272052",
      appId: "1:599747272052:web:04fa716f9c059b29902021"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
function send(){
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         like:0,
         message:msg
   });
   document.getElementById("msg").value = "";
}

//End code
   } });  }); }
getData();

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
  }
     
