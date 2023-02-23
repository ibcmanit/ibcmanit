
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

createCaptcha()

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
        alert("please upload a valid image")
    }

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
            alert("image uploaded")
        });
    })

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


    let experience_manit = document.getElementById('experience_manit').value
    let referral = document.getElementById('referral').value



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

        if(Fname == ''){
            alert
        }
        alert("Name is not valid!")
        Fname = "";
    }

    else if (Email(Em) == false) {
        alert("Wrong email format!")
        Em = "";
    }

    else if (PhoneNumber(Ctn) == false) {
        alert("Phone number should contain only numbers!")
        Ctn = "";
    }


    else if (validateFullName(Fname) && Email(Em) && PhoneNumber(Ctn)) {

        if (cname == 'MANIT') {


            if (Em == '' && Fname == '' && Ctn == '' && File_manit == '' && branch == '' && yr == '' && experience_manit == '') {
                alert("please fill all the necessary feilds!")
            }

            else if (Fname == '') {
                alert("please fill your name")
            }

            else if (Em == '') {
                alert("please fill your e-mail")
            }

            else if (Ctn == '') {
                alert("please fill you contact details!")
            }

            else if (yr == '') {
                alert("fill your year")
            }

            else if (branch == '') {
                alert("please select your branch")
            }

            else if (experience_manit == '') {
                alert("please fill the experience column")
            }

            else if (File_manit == '') {
                alert("Please select an image to upload!")
            }


            else if (url_data == '') {
                alert(" click on the upload button and please upload the valid payment Receipt!")
            }

            else if (flag == false) {
                alert("Invalid Captcha. try Again!");
            }

            else if (Em != '' && Fname != '' && Ctn != '' && File_manit != '' && branch != '' && yr != '' && url_data != '' && experience_manit != '' && flag == true) {




                db_manit.doc().set({

                    College: cname,
                    Email: Em,
                    Full_name: Fname,
                    Contact_no: Ctn,
                    Image: url_data,
                    Branch: branch,
                    Year: yr,
                    experience: experience_manit



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

            if (Em == '' && Fname == '' && Ctn == '' && File_manit == '' && branch == '' && yr == '' && experience_manit == '' && Oth == '') {
                alert("please fill all the necessary feilds!")
            }

            else if (Fname == '') {
                alert("please fill your name")
            }


            else if (Em == '') {
                alert("please fill your e-mail")
            }


            else if (Ctn == '') {
                alert("please fill you contact details!")
            }

            else if (yr == '') {
                alert("fill your year")
            }

            else if (branch == '') {
                alert("please select your branch")
            }

            else if (experience_manit == '') {
                alert("please fill the experience column")
            }


            else if (referral == '') {
                alert("please fill the referral column!")
            }

            else if (Oth == '') {
                alert("please fill your institute name")
            }

            else if (File_other == '') {
                alert("Please select an image to upload!")
            }


            else if (url_data == '') {
                alert(" click on the upload button and please upload the valid payment Receipt!")
            }

            else if (flag == false) {
                alert("Invalid Captcha. try Again!");
            }



            else if (Em != '' && Fname != '' && Ctn != '' && File_other != '' && branch != '' && yr != '' && url_data != '' && experience_manit != '' && referral != '' && Oth != '' && flag == true) {

                db_other.doc().set({

                    Other_college_name: Oth,
                    Email: Em,
                    Full_name: Fname,
                    Contact_no: Ctn,
                    Image: url_data,
                    Branch: branch,
                    Year: yr,
                    experience: experience_manit,
                    code: referral
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