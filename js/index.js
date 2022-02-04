console.log("Hello world");

let Name = document.getElementById("name");
let errorName=document.getElementById("errorName");
let email = document.getElementById("email");
let errorEmail=document.getElementById("errorEmail");
let phone = document.getElementById("phone");
let errorPhone=document.getElementById("errorPhone");
let submit = document.getElementById("submit");
let trueName,trueEmail,truePhone;

// For Name
Name.onblur = () => {
    let regex = /^[a-zA-Z ]{2,30}$/;
    let nameValid = Name.value;
    if (regex.test(nameValid)) {
        trueName = true;
        Name.classList.remove("is-invalid");
        errorName.innerText="";
    }
    else {
        errorName.innerText="Please enter a valid name";
        trueName = false;
        Name.classList.add("is-invalid");
    }
}

// For Email Address
email.onblur = () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let emailValid = email.value;
    if (regex.test(emailValid)) {
        trueEmail = true;
        errorEmail.innerText="";
        email.classList.remove("is-invalid");
    }
    else {
        trueEmail = false;
        errorEmail.innerText="Please enter a valid email";
        email.classList.add("is-invalid");
    }
}


// For Phone Number
phone.onblur = () => {
    let regex = /^([0-9]){10}$/;
    let phoneValid = phone.value;
    if (regex.test(phoneValid)) {
        truePhone = true;
        errorPhone.innerText="";
        phone.classList.remove("is-invalid");
    }
    else {
        truePhone = false;
        errorPhone.innerText="Please enter a valid phone number";
        phone.classList.add("is-invalid");
    }
}
// For Submit button
submit.onclick = (e) => {
    e.preventDefault();
    let alertDanger=document.getElementById('alertDanger');
    let alertSuccess = document.getElementById('alertSuccess');
    if (trueEmail==true && trueName==true && truePhone==true) {
        alertSuccess.classList.add("show");
        alertDanger.classList.remove("show");
        console.log("success");
    } else {
        alertDanger.classList.add("show");
        alertSuccess.classList.remove("show");
        console.log("not success");
    }
}
