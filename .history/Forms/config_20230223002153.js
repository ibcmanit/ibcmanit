
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


    // uploadImage()

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



    if (cname == 'MANIT') {


        // if (url_data == '') {
        //     alert("click on the upload button and upload a valid MANIT ID card")
        // }

        // if (Em == '' || Fname == '' || Ctn == '' || File_manit == '' || branch == '' || yr == '' || experience_manit == '') {
        //     alert("please fill all the necessary feilds!")
        //     frm.reset();
        //     progress_manit.value = 0;
        // }



        else if (Em != '' && Fname != '' && Ctn != '' && File_manit != '' && branch != '' && yr != '' && url_data != '' && experience_manit != '') {




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


        if (url_data == '') {
            alert(" click on the upload button and please upload the valid payment Receipt!")
        }

        if (Em == '' || Fname == '' || Ctn == '' || File_other == '' || branch == '' || yr == '' || experience_manit == '' || referral == '') {
            alert("please fill all the necessary feilds!")
            progress_other.value = 0
            frm.reset();
        }



        else if (Em != '' && Fname != '' && Ctn != '' && File_other != '' && branch != '' && yr != '' && url_data != '' && experience_manit != '' && referral != '') {

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

})