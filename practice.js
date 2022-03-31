var firebaseConfig = {

    apiKey: "AIzaSyCPFwz-K1OG7posEIKhNCtlhnaqAhRVQd8",
  
    authDomain: "kwitter-bec6e.firebaseapp.com",
  
    databaseURL: "https://kwitter-bec6e-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-bec6e",
  
    storageBucket: "kwitter-bec6e.appspot.com",
  
    messagingSenderId: "250683760012",
  
    appId: "1:250683760012:web:376680fede112642f84aa9"
  
  };
  
  
 
  
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }