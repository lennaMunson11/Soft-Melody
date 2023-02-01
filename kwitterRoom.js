
const firebaseConfig = {
  apiKey: "AIzaSyCREliaLdLvH0nMjYkVKlRNX6gZxkABeKU",
  authDomain: "straw-melody.firebaseapp.com",
  databaseURL: "https://straw-melody-default-rtdb.firebaseio.com",
  projectId: "straw-melody",
  storageBucket: "straw-melody.appspot.com",
  messagingSenderId: "409697694987",
  appId: "1:409697694987:web:b4f61412c61142e01a9e0e",
  measurementId: "G-ZH56V0R66F"
};
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
