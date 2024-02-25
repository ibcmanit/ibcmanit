
const firebaseConfig = {
    apiKey: "AIzaSyD7RQgc4aktnlCh2Qqg-fDQV3A7R2sGNIA",
    authDomain: "mun-database-24-7a61b.firebaseapp.com",
    projectId: "mun-database-24-7a61b",
    storageBucket: "mun-database-24-7a61b.appspot.com",
    messagingSenderId: "1042043337052",
    appId: "1:1042043337052:web:7cf2e1f73e18d74e302999",
    measurementId: "G-HTB8H7Y3YG"
  };



firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();



const db_manit = firestore.collection("MunForm_manit");
const db_other = firestore.collection("MunForm_other");

let clg = document.getElementById('college')
let cname = "MANIT";


clg.addEventListener('change', () => {
    let cnumber = document.getElementById('college').value;

    if (cnumber == '2') {
        cname = "other"
    }

    console.log(cname)

})

// captcha code
var code;
function createCaptcha() {
    //clear the contents of captcha div first 
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        //below code will not allow Repetition of Characters
        var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

let flag = false;

function validateCaptcha() {
    if (document.getElementById("cpatchaTextBox").value == code) {
        flag = true;

    } else {
        flag = false;
        createCaptcha();
    }
}

createCaptcha();

var frm = document.getElementById('frm');

let submitButton = document.getElementById('submit');
let File_data_manit = document.getElementById('file_manit');
let File_data_other = document.getElementById('file_other');
let img_btn = document.getElementById('upload_manit_img');
let img_btn_other = document.getElementById('upload_other_img');
var progress_manit = document.getElementById('uploadProgress_manit')
var progress_other = document.getElementById('uploadProgress_other')

let url_data = '';

File_data_manit.addEventListener("change", getFile)
File_data_other.addEventListener("change", getFile)

// frm.addEventListener("submit" , uploadImage)

// img_btn.addEventListener('click' , uploadImage)

var fileName;
var fileItem = '';

function getFile(e) {
    fileItem = e.target.files[0];
    fileName = fileItem.name

    console.log(fileItem);
    console.log(fileName)
}

const uploadImage = (e) => {

    e.preventDefault()

    if (fileItem == '') {
        progress_manit.value = 0
        progress_other.value = 0
        alert("Please upload a valid image.")
    }

    else if (fileItem != '') {



        let storageRef = firebase.storage().ref("images_manit/" + fileName)
        let uploadTask = storageRef.put(fileItem)

        // uploadTask.then(snapshot => snapshot.ref.getDownloadURL())
        //     .then(url => {
        //         console.log(url);
        //         url_data = url;
        //         alert('image uploaded successfully');
        //     }).catch(console.error);



        uploadTask.on("state_changed", (snapshot) => {
            console.log(snapshot)

            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            console.log(percent)

            if (cname == 'MANIT') {
                progress_manit.value = percent
            }

            if (cname == 'other') {
                progress_other.value = percent
            }


        }, (error) => {
            console.log(error)
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                url_data = downloadURL
                alert("Image uploaded")
            });
        })
    }
}

img_btn.addEventListener('click', uploadImage)
img_btn_other.addEventListener('click', uploadImage)

submitButton.addEventListener("click", (e) => {



    e.preventDefault()

    let Oth = document.getElementById('other').value;
    let Em = document.getElementById('email').value;
    let Fname = document.getElementById('Full_name').value;
    let Ctn = document.getElementById('contact').value;

    let branch = document.getElementById('branch').value;
    let yr = document.getElementById('year').value;


    let experience_manit = document.getElementById('experience_manit').value;
    let committee = document.getElementById('committee').value;
    let referral = document.getElementById('referral').value;
    let transaction_id = document.getElementById('transaction_id').value;



    let File_other = document.getElementById('file_other').value;
    let File_manit = document.getElementById('file_manit').value;

    // validation

    // captcha validation
    validateCaptcha();



    /*Full name input validation*/

    function validateFullName(Fname) {
        const regex = /^[a-zA-Z\s]+$/; // Regular expression to match letters and spaces
        return regex.test(Fname);
    }


    // E-mail validation
    function Email(Em) {
        // var message = document.getElementsByClassName("error-message");
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var atpos = Em.indexOf("@");
        var dotpos = Em.lastIndexOf(".");

        if (Em == "" || Em.match(mailformat) || atpos > 1 && (dotpos - atpos > 2)) {
            return true;
        }

        else {
            // text = "Wrong email format";
            return false;
        }
    }

    /*phone number validation*/
    function PhoneNumber(Ctn) {

        var numbers = /^[0-9]+$/;
        if (Ctn == "" || Ctn.match(numbers)) {
            return true;
        }

        else {
            // text = "Phone number should contain only numbers";
            return false;
        }
    }

    if (validateFullName(Fname) == false) {

        if (Fname == '') {
            alert("Please fill your name!")
        }

        else if (Fname != '') {
            alert("Name is not valid!")
            Fname = "";
        }
    }

    else if (Email(Em) == false) {

        if (Em == '') {
            alert("Please fill your Email!")
        }

        else if (Em != '') {
            alert("Wrong email format!")
            Em = "";
        }
    }

    else if (PhoneNumber(Ctn) == false) {

        if (Ctn == '') {
            alert("Please fill your contact details!")
        }

        else if (Ctn != '') {
            alert("Phone number should contain only numbers!")
            Ctn = "";
        }

    }


    else if (validateFullName(Fname) && Email(Em) && PhoneNumber(Ctn)) {

        if (cname == 'MANIT') {


            if (Em == '' && Fname == '' && Ctn == '' && File_manit == '' && branch == '' && yr == '' && experience_manit == ''&& committee == '') {
                alert("Please fill all the necessary feilds!")
            }

            else if (Fname == '') {
                alert("Please fill your name")
            }

            else if (Em == '') {
                alert("Please fill your e-mail")
            }

            else if (Ctn == '') {
                alert("Please fill you contact details!")
            }

            else if (yr == '') {
                alert("fill your year")
            }

            else if (branch == '') {
                alert("Please select your branch")
            }

            else if (experience_manit == '') {
                alert("Please fill the experience column")
            }

            else if (committee == '' || committee === "Choose a Committee") {
                alert("Please choose the Committee")
            }

            else if (File_manit == '') {
                alert("Please select an image to upload!")
            }


            else if (url_data == '') {
                alert(" Click on the upload button and Please upload the valid payment Receipt!")
            }

            else if (flag == false) {
                alert("Invalid Captcha. try Again!");
            }

            else if (Em != '' && Fname != '' && Ctn != '' && File_manit != '' && branch != '' && yr != '' && url_data != '' && experience_manit != '' && committee != '' && flag == true) {




                db_manit.doc().set({

                    College: cname,
                    Email: Em,
                    Full_name: Fname,
                    Contact_no: Ctn,
                    Image: url_data,
                    Branch: branch,
                    Year: yr,
                    experience: experience_manit,
                    committee: committee



                }).then(() => {

                    alert("Registration Successful!")
                    frm.reset();
                    progress_manit.value = 0;
                }).catch((error) => {
                    console.log(error);
                })

            }

        }

        else if (cname == 'other') {

            if (Em == '' && Fname == '' && Ctn == '' && File_manit == '' && branch == '' && yr == '' && experience_manit == '' && committee == '' && Oth == '') {
                alert("Please fill all the necessary feilds!")
            }

            else if (Fname == '') {
                alert("Please fill your name")
            }


            else if (Em == '') {
                alert("Please fill your e-mail")
            }


            else if (Ctn == '') {
                alert("Please fill you contact details!")
            }

            else if (yr == '') {
                alert("Fill your year")
            }

            else if (branch == '') {
                alert("Please select your branch")
            }

            else if (experience_manit == '') {
                alert("Please fill the experience column")
            }

            else if (committee == '' || committee === "Choose a Committee") {
                alert("Please choose the Committee")
            }

            else if (referral == '') {
                alert("Please fill the referral column!")
            }
            else if (transaction_id == '') {
                alert("Please fill the transaction_id column!")
            }

            else if (Oth == '') {
                alert("Please fill your institute name")
            }

            else if (File_other == '') {
                alert("Please select an image to upload!")
            }


            else if (url_data == '') {
                alert(" Click on the upload button and Please upload the valid payment Receipt!")
            }

            else if (flag == false) {
                alert("Invalid Captcha. Try Again!");
            }



            else if (Em != '' && Fname != '' && Ctn != '' && File_other != '' && branch != '' && yr != '' && url_data != '' && experience_manit != '' && committee != '' && referral != '' &&  transaction_id != '' && Oth != '' && flag == true) {

                db_other.doc().set({

                    Other_college_name: Oth,
                    Email: Em,
                    Full_name: Fname,
                    Contact_no: Ctn,
                    Image: url_data,
                    Branch: branch,
                    Year: yr,
                    experience: experience_manit,
                    committee:committee,
                    code: referral,
                    transaction: transaction_id
                }).then(() => {
                    alert("Registration Successful!")
                    frm.reset();
                    progress_other.value = 0
                }).catch((error) => {
                    console.log(error);
                })

            }
        }

    }



    // else if(flag == false){
    //     alert("Invalid Captcha. try Again!");
    // }

})