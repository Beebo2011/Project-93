
const firebaseConfig = {
      apiKey: "AIzaSyCwiCY9VhzRPnFA72M07dJKDeJY9b3l2ww",
      authDomain: "kwitterapp-8ec27.firebaseapp.com",
      projectId: "kwitterapp-8ec27",
      storageBucket: "kwitterapp-8ec27.appspot.com",
      messagingSenderId: "676562832023",
      appId: "1:676562832023:web:e1de3524f03b71401177d2",
      measurementId: "G-ESTTVSX6VF"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
