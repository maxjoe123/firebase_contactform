// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAYAuh9Mgv0-pV1yVGCKAGDHHjbti_VJy0",
    authDomain: "medata-781b9.firebaseapp.com",
    databaseURL: "https://medata-781b9.firebaseio.com",
    projectId: "medata-781b9",
    storageBucket: "medata-781b9.appspot.com",
    messagingSenderId: "607625829700",
    appId: "1:607625829700:web:a980cfa367c27ec7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
  e.prevent Default();

var firstname = getInputVal('firstname');
var lastname = getInputVal('lastname');
var dob = getInputVal('dob');
var Gender = getInputVal('Gender');
var BloodGroup = getInputVal('BloodGroup');
var height = getInputVal('height');
var weight = getInputVal('weight');
var defects = getInputVal('defects');
var allergy = getInputVal('allergy');
var uid = getInputVal('uid');
var email = getInputVal('email');
var fpassword = getInputVal('fpassword');
var lpassword = getInputVal('lpassword');
var contactnumber = getInputVal('contactnumber');
var emergencycontactnumber = getInputVal('emergencycontactnumber');
var caddress = getInputVal('caddress');
var paddress = getInputVal('paddress');
var picture = getInputVal('picture');
var loginbutton = getInputVal('loginbutton');
 saveMessage(firstname,lastname,dob,Gender,BloodGroup,height,weight,defects,allergy,uid,email,fpassword,lpassword,contactnumber,emergenctcontactnumber,cadress,padress,picture,loginbutton)
}
function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(firstname,lastname,dob,Gender,BloodGroup,height,weight,defects,allergy,uid,email,fpassword,lpassword,contactnumber,emergenctcontactnumber,cadress,padress,picture,loginbutton)
 {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({firstname:firstname,lastname:lastname,dob:dob,Gender:Gender,BloodGroup:BloodGroup,height:height,weight:weight,defects:defects,allergy:allergy,uid:uid,email:email,fpassword:fpassword,lpassword:lpassword,contactnumber:contactnumber,emergencycontactnumber:emergencycontactnumber,cadress:cadress,padress:padress,picture:picture,loginbutton:loginbutton });
 }
