// const firebaseConfig = {
//     apiKey: "AIzaSyA8uia2DvT04dUbAhvXEpSGkWav1h08GGo",
//     authDomain: "mun-database-b0bc3.firebaseapp.com",
//     databaseURL: "https://mun-database-b0bc3-default-rtdb.firebaseio.com",
//     projectId: "mun-database-b0bc3",
//     storageBucket: "mun-database-b0bc3.appspot.com",
//     messagingSenderId: "690798009433",
//     appId: "1:690798009433:web:4862ec4a7b36226d676548",
//     measurementId: "G-LTL4TTP4HN"
// };

const firebaseConfig = {
    apiKey: "AIzaSyARKu-2isfWeMn5utITb-A2P6EHTd075Ag",
    authDomain: "ibc-manit.firebaseapp.com",
    projectId: "ibc-manit",
    storageBucket: "ibc-manit.appspot.com",
    messagingSenderId: "267619905689",
    appId: "1:267619905689:web:fcba975fbaa97b4e56c808",
    measurementId: "G-ZRSJ5B2N0E"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

//reference your database
var MunFormDB = firebase.database().ref('MunForm');



// get data


const gotData = (data) => {
    var scores = data.val();
    var keys = Object.keys(scores)
    console.log(keys);

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var college = scores[k].college
        console.log(college)
    }
}

const errData = (err) => {
    console.log(err);
}

MunFormDB.on('value', gotData, errData);

// save data
document.getElementById('registration__form').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email')
    var college = getElementVal('college');
    var city = getElementVal('city');
    var referral = getElementVal('referral');
    var code = getElementVal('code');

    saveData(name, email, college, city, referral, code);
}

const saveData = (name, email, college, city, referral, code) => {
    var newForm = MunFormDB.push();

    newForm.set({
        name: name,
        email: email,
        college: college,
        city: city,
        referral: referral,
        code: code
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}







