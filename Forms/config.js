const firebaseConfig = {
    apiKey: "AIzaSyA8uia2DvT04dUbAhvXEpSGkWav1h08GGo",
    authDomain: "mun-database-b0bc3.firebaseapp.com",
    databaseURL: "https://mun-database-b0bc3-default-rtdb.firebaseio.com",
    projectId: "mun-database-b0bc3",
    storageBucket: "mun-database-b0bc3.appspot.com",
    messagingSenderId: "690798009433",
    appId: "1:690798009433:web:4862ec4a7b36226d676548",
    measurementId: "G-LTL4TTP4HN"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


const db_manit = firestore.collection("MunForm_manit");
const db_other = firestore.collection("MunForm_other");

let clg = document.getElementById('college')
let cname = "MANIT";


clg.addEventListener('change', () => {
    cnumber = document.getElementById('college').value;

    if (cnumber == '2') {
        cname = "other"
    }

    console.log(cname)

})

var frm = document.getElementById('frm');

let submitButton = document.getElementById('submit');

submitButton.addEventListener("click", (e) => {

    e.preventDefault()

    let Oth = document.getElementById('other').value;
    let Em = document.getElementById('email').value;
    let Fname = document.getElementById('Full_name').value;
    let Ctn = document.getElementById('contact').value;
    let File = document.getElementById('file').value;
    let branch = document.getElementById('branch').value;
    let yr = document.getElementById('year').value;

    if (cname == 'MANIT') {

        if (Em == '' || Fname == '' || Ctn == '' || File == '' || branch == '' || yr == '' || cname == '') {
            alert("please fill all the necessary feilds!")
            frm.reset();
        }

        else if (Em != '' && Fname != '' && Ctn != '' && File != '' && branch != '' && yr != '') {
            db_manit.doc().set({

                College: cname,
                Email: Em,
                Full_name: Fname,
                Contact_no: Ctn,
                Image: File,
                Branch: branch,
                Year: yr



            }).then(() => {
                alert("Registration Successful!")
                frm.reset();
            }).catch((error) => {
                console.log(error);
            })

        }

    }

    else if (cname == 'other') {

        if (Oth == '' || Em == '' || Fname == '' || Ctn == '' || File == '' || branch == '' || yr == '') {
            alert("please fill all the necessary feilds!")
            frm.reset();
        }

        else if (Em != '' && Fname != '' && Ctn != '' && File != '' && branch != '' && yr != '') {

            db_other.doc().set({

                Other_college_name: Oth,
                Email: Em,
                Full_name: Fname,
                Contact_no: Ctn,
                Image: File,
                Branch: branch,
                Year: yr
            }).then(() => {
                alert("Registration Successful!")
                frm.reset();
            }).catch((error) => {
                console.log(error);
            })

        }
    }

})