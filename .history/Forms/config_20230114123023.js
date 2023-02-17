const firebaseConfig = {
    apiKey: "AIzaSyBTY3jG4AcbN6XeBcrplznhx-RhHOaxaJM",
    authDomain: "registartion-form-ibc.firebaseapp.com",
    databaseURL: "https://registartion-form-ibc-default-rtdb.firebaseio.com",
    projectId: "registartion-form-ibc",
    storageBucket: "registartion-form-ibc.appspot.com",
    messagingSenderId: "686704622403",
    appId: "1:686704622403:web:ea9ef7625afbad77528df6"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
const registerDB = firebase.database().ref("RegistrationForm")

document.getElementById('registration__form').addEventListener("submit" , submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email')
    var college = getElementVal('college');
    var city = getElementVal('city');
    var state = getElementVal('state');
    var code = getElementVal('code');

    saveData(name,email,college,city,state,code)
}

const saveData = (name,email,college,city,state,code) => {
    var newForm = registerDB.push();

    newForm.set({
        name: name,
        email: email,
        college: college,
        city: city,
        state: state,
        code: code
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}