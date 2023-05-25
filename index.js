const signUp = document.querySelector(".signUp");
signUp.addEventListener("click", (e) => {

    var userName = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    if (userName.value == "") {
        document.getElementById("user-error").innerHTML = '<i class="ri-error-warning-fill"></i> Username is Required!';
        document.getElementById("user-error").style.color = "red";
        userName.classList.add('getvalue-sub')
        userName.classList.remove('getvalue')
    }
    
    else{
        document.getElementById("user-error").innerHTML = "";
        userName.classList.remove('getvalue-sub')
        userName.classList.add('getvalue')
    }

    if (email.value == "") {
        document.getElementById("email-error").innerHTML = '<i class="ri-error-warning-fill"></i>Email Address is Required!';
        document.getElementById("email-error").style.color = "red";
        email.classList.add('getvalue-sub')
        email.classList.remove('getvalue')
    } else {
        document.getElementById("email-error").innerHTML = "";
        email.classList.remove('getvalue-sub')
        email.classList.add('getvalue')
    }

    if (password.value == "") {
        document.getElementById("password-error").innerHTML = '<i class="ri-error-warning-fill"></i>Password is Required!';
        document.getElementById("password-error").style.color = "red";
        password.classList.add('getvalue-sub')
        password.classList.remove('getvalue')
    } else {
        document.getElementById("password-error").innerHTML = '';
        password.classList.remove('getvalue-sub')
        password.classList.add('getvalue')
    }
    
    if (userName.value == "" || email.value == "" || password.value == "") {
        e.preventDefault()
    } 
});

//USERNAME VALIDATIONS STARTS

var userName = document.getElementById("username");
userName.addEventListener("focus", () => {
    document.getElementById("user-error").innerHTML = "Username must not be longer than 23 and less than 3 words";
})

var userName = document.getElementById("username");
userName.addEventListener("blur", () => {
    document.getElementById("user-error").innerHTML = "";
})

var userName = document.getElementById("username");
userName.addEventListener("keyup", () => {
    const USER_REGEX = /^[a-z A-Z][a-z A-Z 0-9-_$]{3,23}$/;
    var userName = document.getElementById("username");

    if (userName.value.match(USER_REGEX)) {
        document.getElementById("user-error").innerHTML = "Username is Valid";
        document.getElementById("user-error").style.color = "green";
        userName.classList.remove('getvalue-sub')
        userName.classList.add('getvalue')
    } else {
        document.getElementById("user-error").innerHTML = '<i class="ri-error-warning-fill"></i>Invalid Username!';
        document.getElementById("user-error").style.color = "red";
        userName.classList.add('getvalue-sub')
        userName.classList.remove('getvalue')
    }
    if (userName.value == "") {
        document.getElementById("user-error").innerHTML = '<i class="ri-error-warning-fill"></i>Username is Required!';
        document.getElementById("user-error").style.color = "red";
        userName.classList.add('getvalue-sub')
        userName.classList.remove('getvalue')
    }
})

// EMAIL VALIDATIONS START
var email = document.getElementById("email");
email.addEventListener("focus", () => {
    document.getElementById("email-error").innerHTML = "Email Address must include an @ symbol";
});

var email = document.getElementById("email");
email.addEventListener("blur", () => {
    document.getElementById("email-error").innerHTML = "";
});

var email = document.getElementById("email");
email.addEventListener("keyup", () => {
    var EMAIL_REGEX = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var email = document.getElementById("email");



    if (email.value.match(EMAIL_REGEX)) {
        document.getElementById("email-error").innerHTML = "Email Address is Valid";
        document.getElementById("email-error").style.color = "green";
        email.classList.remove('getvalue-sub')
        email.classList.add('getvalue')
    } else {
        document.getElementById("email-error").innerHTML = '<i class="ri-error-warning-fill"></i> Invalid Email Address!';
        document.getElementById("email-error").style.color = "red";
        email.classList.add('getvalue-sub')
        email.classList.remove('getvalue')
    }
    if (email.value == "") {
        document.getElementById("email-error").innerHTML = '<i class="ri-error-warning-fill"></i> Email Address Required!';
        document.getElementById("email-error").style.color = "red";
        email.classList.add('getvalue-sub')
        email.classList.remove('getvalue')
    }
});

//EMAIL VALIDATION ENDS

//PASWORD VALIDATIONS STARTS
var password = document.getElementById("password");
password.addEventListener("focus", () => {
    document.querySelector(".message").style.display = 'block';
});

var password = document.getElementById("password");
password.addEventListener("blur", () => {
    document.querySelector(".message").style.display = 'none';
    document.getElementById("password-error").innerHTML = '';
})

var password = document.getElementById("password");
password.addEventListener("keyup", () => {

    var PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    var password = document.getElementById("password");


    var capital = document.getElementById('capital');
    var letter = document.getElementById('letter');
    var number = document.getElementById('number');
    var lengt = document.getElementById('length');
       
    if(password.value.match(PASSWORD_REGEX)){
        document.getElementById("password-error").innerHTML = 'Password is Valid';
        document.getElementById("password-error").style.color = "green";
        password.classList.remove('getvalue-sub')
        password.classList.add('getvalue')
    }
    else{
        document.getElementById("password-error").innerHTML = '<i class="ri-error-warning-fill"></i> Invalid Password!';
        document.getElementById("password-error").style.color = "red";
    }
    if (password.value == "") {
        document.getElementById("password-error").innerHTML = '<i class="ri-error-warning-fill"></i> Password is Required!';
        document.getElementById("password-error").style.color = "red";
        password.classList.add('getvalue-sub')
        password.classList.remove('getvalue')
    } 
    var lowerCase = /[a-z]/g;
    if (password.value.match(lowerCase)) {
        letter.classList.add('valid');
        letter.classList.remove('invalid');
    } else {
        letter.classList.add('invalid');
        letter.classList.remove('valid');
        password.classList.add('getvalue-sub')
        password.classList.remove('getvalue')
    }

    var upperCase = /[A-Z]/g;
    if (password.value.match(upperCase)) {
        capital.classList.add('valid');
        capital.classList.remove('invalid');
    } else {
        capital.classList.add('inavlid')
        capital.classList.remove('valid')
        password.classList.add('getvalue-sub')
        password.classList.remove('getvalue')
    }
    
    var numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        number.classList.add('valid');
        number.classList.remove('invalid');
    } else {
        number.classList.add('invalid');
        number.classList.remove('valid');
        password.classList.add('getvalue-sub')
        password.classList.remove('getvalue')
    }
    
    if (password.value.length >= 8) {
        lengt.classList.add('valid')
        lengt.classList.remove('invalid')
    } else {
        lengt.classList.add('invalid')
        lengt.classList.remove('valid')
        password.classList.add('getvalue-sub')
        password.classList.remove('getvalue')
    }
});
var check = document.getElementById('checkbox');
check.addEventListener('click', () => {
    var password = document.getElementById("password");

    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
})




