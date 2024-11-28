let nameError=document.getElementById("name-error");
let emailError=document.getElementById("email-error");
let phoneError=document.getElementById("phone-error");
let messageError=document.getElementById("text-error");
let submitError=document.getElementById("submit-error");
let b = document.getElementsByClassName("fa-paper-plane")
let a = (b.clientHeight)


function validateName() {
  var name = document.getElementById('contact-name').value;

  if (name.length ==0) {
    nameError.innerHTML = "Your name is required";
    return false;
  } 
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write the full names";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById('contact-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }

  if (!phone.match(/^[0-9]+$/)) { // Check only digits first
    phoneError.innerHTML = 'Only digits please';
    return false;
  }

  if (phone.length !== 10 || phone.length>10) { // Check length after verifying digits
    phoneError.innerHTML = "Phone no must be 10 digits";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail(){
  let email=document.getElementById("contact-email").value;

  if(email.length==0){
    emailError.innerHTML='Email is required';
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Invalid Email';
    return false;
  }

  emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true
}

function validateMessage(){
  let message=document.getElementById("contact-message").value;
  let required=50;
  let left=required-message.length;

  if(left>0){
    messageError.innerHTML=left +' Characters remaining';
    return false;
  }
  messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
}


function validateForm(){
  
if(!validateName ()|| !validateEmail() || !validatePhone()||!validateName()){
  submitError.style.display='block';
  submitError.innerHTML='Please fix all the error to submit';

  setTimeout(function(){
   submitError.style.display='none';}, 3000);

   return false;
}

}
console.log(typeof(a));
