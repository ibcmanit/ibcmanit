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

// initialize firebase
firebase.initializeApp(firebaseConfig)

//reference your database
var MunFormDB = firebase.database().ref('MunForm');



// get data


const gotData = (data) => {
    var scores = data.val();
    var keys = Object.keys(scores)
    console.log(keys);

    for(var i = 0;i<keys.length;i++){
        var k = keys[i];
        var college = scores[k].college
        console.log(college)
    }
}

const errData = (err) => {
    console.log(err);
}

MunFormDB.on('value',gotData,errData);

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







