importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCiD0BY_uaORZttnrqIeis_WQF8uh2GH3I",
  authDomain: "lively-meds.firebaseapp.com",
  projectId: "lively-meds",
  storageBucket: "lively-meds.appspot.com",
  messagingSenderId: "908494184155",
  appId: "1:908494184155:web:c5c37ab4090e5a3f3e76fe",
  measurementId: "G-V91VZVJK1P"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});