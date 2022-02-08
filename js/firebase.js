
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyARKu-2isfWeMn5utITb-A2P6EHTd075Ag",
    authDomain: "ibc-manit.firebaseapp.com",
    projectId: "ibc-manit",
    storageBucket: "ibc-manit.appspot.com",
    messagingSenderId: "267619905689",
    appId: "1:267619905689:web:fcba975fbaa97b4e56c808",
    measurementId: "G-ZRSJ5B2N0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var db = getFirestore(app);

const email = document.getElementById("sub-email");
const submit = document.getElementById("email-submit");
const modal = document.getElementById("modal");
const modalButtom = document.getElementById("close-modal");
const body = document.querySelector("body");

const addData = ({ database, ...entries }) => {
  const databaseRef = collection(db, database);

  const addData = async () => {
    const newData = {
      ...entries,
      timestamp: serverTimestamp(),
    };
    await addDoc(databaseRef, newData);
  };

  const response = addData();

  response
    .then(() => {
      modal.style.transform = "translateY(0)";
      modal.style.opacity = "1";
      body.style.overflow = "hidden";

    })
    .catch((e) => {
      alert("Something went wrong" + e);
    });
};




const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


email.addEventListener("focus", () => {
        email.classList.remove("error");
});



email.addEventListener("focusout", () => {
    if(!validateEmail(email.value)){
        email.classList.add("error");
    }
});

email.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        submit.click();
    }
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateEmail(email.value)) {
        addData({
            database: "subscribers",
            email: email.value
        });
        email.value = "";
    }
})

modalButtom.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.transform = "translateY(-100%)";
    modal.style.opacity = "0";
    body.style.overflow = "auto";
})

