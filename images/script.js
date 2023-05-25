var signUp = document.querySelector('.signUp');
signUp.addEventListener('click', () => {
    var userName = document.getElementById('username');
    var email = document.getElementById('email')
    var passWord = document.getElementById('password');
    var errOne = document.querySelector('.error-one')
    var errTwo = document.querySelector('.error-two')
    var errThree = document.querySelector('.error-three')

    if (userName.value == "") {
        userName.classList.add('getvalue-sub')
        userName.classList.remove('getvalue')
        errOne.style.visibility = 'visible';        
        var signUp = document.querySelector('.signUp');
        signUp.style.background = 'red';
        document.querySelector('.container').style.backgroundColor = 'white';
        document.querySelector('.container').style.borderColor = 'red';
    }
     
    if (email.value == "") {
        email.classList.add('getvalue-sub')
        email.classList.remove('getvalue')
        errTwo.style.visibility = 'visible';
        var signUp = document.querySelector('.signUp');
        signUp.style.background = 'red';
        document.querySelector('.container').style.backgroundColor = 'white';
        document.querySelector('.container').style.borderColor = 'red';
    }

    // if (email.value.match(pattern)) {
    //     email.classList.remove('getvalue-sub')
    //     email.classList.add('getvalue')
    //     errTwo.style.visibility = 'hidden';
        
    // }    

    if (passWord.value == "") {
        passWord.classList.add('getvalue-sub')
        passWord.classList.remove('getvalue')
        errThree.style.visibility = 'visible';
        var signUp = document.querySelector('.signUp');
        signUp.style.background = 'red';
        document.querySelector('.container').style.backgroundColor = 'white';
        document.querySelector('.container').style.borderColor = 'red';
    }
    else{
        userName.classList.remove('getvalue-sub')
        userName.classList.add('getvalue')
        errOne.style.visibility = 'hidden';

        email.classList.remove('getvalue-sub')
        email.classList.add('getvalue')
        errTwo.style.visibility = 'hidden';

        passWord.classList.remove('getvalue-sub')
        passWord.classList.add('getvalue')
        errThree.style.visibility = 'hidden';




        alert('done')
    }


});



    var userName = document.getElementById('username');
    userName.addEventListener('keyup', () => {
        var errOne= document.querySelector('.error-one')


        if (userName.value == "") {
            userName.classList.add('getvalue-sub')
            userName.classList.remove('getvalue')
            errOne.style.visibility = 'visible';
            var signUp = document.querySelector('.signUp');
            signUp.style.background = 'red';
            document.querySelector('.container').style.backgroundColor = 'white';
            document.querySelector('.container').style.borderColor = 'red';
        
        }
        else{
            userName.classList.remove('getvalue-sub')
            userName.classList.add('getvalue')
            errOne.style.visibility = 'hidden';
            var signUp = document.querySelector('.signUp');
            signUp.style.background = 'rgb(86, 86, 199)';
            document.querySelector('.container').style.backgroundColor = 'lightgray';
            document.querySelector('.container').style.borderColor = 'blue';
        }
    });

    var email = document.getElementById('email')
    email.addEventListener('keyup', () => {
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var errTwo = document.querySelector('.error-two')

            if (email.value.match(pattern)) {
                email.classList.remove('getvalue-sub')
                email.classList.add('getvalue')
                errTwo.style.visibility = 'hidden';
                
            }
            else {
                errTwo.style.visibility = 'visible';
                errTwo.innerHTML = '<i class="ri-error-warning-fill"></i> Invalid Email Address';
                email.classList.add('getvalue-sub')
                email.classList.remove('getvalue')
                var signUp = document.querySelector('.signUp');
                signUp.style.background = 'rgb(86, 86, 199)';
                document.querySelector('.container').style.backgroundColor = 'lightgray';
                document.querySelector('.container').style.borderColor = 'blue';
            }
            if (email.value == "") {
                email.classList.add('getvalue-sub')
                email.classList.remove('getvalue')
                errTwo.style.visibility = 'visible';
                errTwo.innerHTML = '<i class="ri-error-warning-fill"> </i>Please enter your Email address';
                var signUp = document.querySelector('.signUp');
                signUp.style.background = 'red';
                document.querySelector('.container').style.backgroundColor = 'white';
                document.querySelector('.container').style.borderColor = 'red';

            }
    })

    var capital = document.getElementById('capital');
    var letter = document.getElementById('letter');
    var number = document.getElementById('number');
    var lengt = document.getElementById('length');

        var passWord = document.getElementById('password');
        passWord.addEventListener('focus', () => {
            document.querySelector('.message').style.display = 'block';
        });

        var passWord = document.getElementById('password');
        passWord.addEventListener('blur', () => {
            document.querySelector('.message').style.display = 'none';
        });
        

        var passWord = document.getElementById('password');
        passWord.addEventListener('keyup', () => {
            var errThree = document.querySelector('.error-three');

            if (passWord.value == "") {
                passWord.classList.add('getvalue-sub')
                passWord.classList.remove('getvalue')
                errThree.style.visibility = 'visible';
                var signUp = document.querySelector('.signUp');
                signUp.style.background = 'red';
                document.querySelector('.container').style.backgroundColor = 'white';
                document.querySelector('.container').style.borderColor = 'red';
            }
            else{
                passWord.classList.remove('getvalue-sub')
                passWord.classList.add('getvalue')
                errThree.style.visibility = 'hidden';
                var signUp = document.querySelector('.signUp');
                signUp.style.background = 'rgb(86, 86, 199)';
                document.querySelector('.container').style.backgroundColor = 'lightgray';
                document.querySelector('.container').style.borderColor = 'blue';
                
            }        

            var lowerCase = /[a-z]/g;
            if (passWord.value.match(lowerCase)) {
                letter.classList.add('valid');
                letter.classList.remove('invalid');
            } else {
                letter.classList.add('invalid');
                letter.classList.remove('valid');
                passWord.classList.add('getvalue-sub')
                passWord.classList.remove('getvalue')
            }

            var upperCase = /[A-Z]/g;
            if (passWord.value.match(upperCase)) {
                capital.classList.add('valid');
                capital.classList.remove('invalid');
            } else {
                capital.classList.add('inavlid')
                capital.classList.remove('valid')
                passWord.classList.add('getvalue-sub')
                passWord.classList.remove('getvalue')
            }
            
            var numbers = /[0-9]/g;
            if (passWord.value.match(numbers)) {
                number.classList.add('valid');
                number.classList.remove('invalid');
            } else {
                number.classList.add('invalid');
                number.classList.remove('valid');
                passWord.classList.add('getvalue-sub')
                passWord.classList.remove('getvalue')
            }
            
            if (passWord.value.length >= 8) {
                lengt.classList.add('valid')
                lengt.classList.remove('invalid')
            } else {
                lengt.classList.add('invalid')
                lengt.classList.remove('valid')
                passWord.classList.add('getvalue-sub')
                passWord.classList.remove('getvalue')
            }
        });

    var check = document.getElementById('checkbox');
    check.addEventListener('click', () => {
        if (passWord.type === 'password') {
            passWord.type = 'text';
        } else {
            passWord.type = 'password';
        }
    })


    window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
        preloader.classList.add("preload-finish");
      });
      
// });

// window.addEventListener('load', () => {
//     if (window.load) {
//         document.querySelector('.load').style.display = 'none';
//     } else {
//         document.querySelector('.load').style.display = 'flex';
//     }
// })

