
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCEoK_OOr9UtUzi6yzJ5XRxbMCWSSxMtCA",
    authDomain: "pamith-amarathunga.firebaseapp.com",
    projectId: "pamith-amarathunga",
    storageBucket: "pamith-amarathunga.appspot.com",
    messagingSenderId: "220639317891",
    appId: "1:220639317891:web:52cd5d1de7114b0e8bb0b6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
  //get ref to database services  
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();

    set(ref(db, 'user/' + document.getElementById("name").value),
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    });
     alert("Your message has been sent !")
  })


  