var sign = document.querySelector('.btn');

sign.addEventListener('click', () => {

    var text = document.getElementById('useR').value;
    var nA = document.getElementById('useR');
    var email = document.getElementById('gmail').value;
    var eml = document.getElementById('gmail');
    var password  = document.getElementById('password').value;
    var word = document.getElementById('password');
    var pass = document.getElementById('pass');
    
    if (text === '') {
       nA.style.borderColor = 'red';
       nA.style.outlineColor = 'red';
       var fN = document.getElementById('fullname');
        fN.style.visibility = 'visible'
    }
    if(email == '') {
        eml.style.borderColor = 'red';
        eml.style.outlineColor = 'red';
        var nil = document.getElementById('mail');
        nil.style.visibility = 'visible';
    }
    if (password == '') {
        word.style.borderColor = 'red';
        word.style.outlineColor = 'red';
        pass.style.visibility = 'visible'
    } 
    else {
        alert('done')
    }
});


var nap = document.getElementById('useR');

nap.addEventListener('keydown', () => {

    var text = document.getElementById('useR').value;
    var nA = document.getElementById('useR');

    if (text.length == 0 || text.length < 3) {
        var fN = document.getElementById('fullname');
        fN.innerHTML = 'user name is too short';
        fN.style.color = 'red';
        nA.style.borderColor = 'red';
        nA.style.outlineColor = 'red';
        fN.style.visibility = 'visible'
    }

    else {
        var fN = document.getElementById('fullname');
        nA.style.outlineColor = 'green';
        fN.style.visibility = 'hidden';
        nA.style.borderColor = 'black';
    }

    if (text == '') {
        nA.style.borderColor = 'red';
        nA.style.outlineColor = 'red';
        var fN = document.getElementById('fullname');
        fN.style.visibility = 'visible';
        fN.innerHTML = '* Please Enter Your User Name';
    }

})

function demo() {
    var form = document.getElementById('form');
    var email = document.getElementById('gmail').value;
    var eml = document.getElementById('gmail');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var nil = document.getElementById('mail');
    eml.style.borderColor = 'black';


    if (email.match(pattern)) {
        eml.style.outlineColor = 'green';
        form.classList.add('valid');
        form.classList.remove('invalid');
        nil.style.visibility = 'hidden';
    }
    
    else {
        nil.innerHTML = 'invalid email address';
        eml.style.outlineColor = 'red';
        eml.style.borderColor = 'red';
        form.classList.add('invalid');
        form.classList.remove('valid');
        nil.style.visibility = 'visible';  
    }
    if(email == '') {
        eml.style.borderColor = 'red';
        eml.style.outlineColor = 'red';
        var nil = document.getElementById('mail');
        nil.style.visibility = 'visible';
        nil.innerHTML = '* Your Email Address is Required';
    }
}


var wd = document.getElementById('password');

wd.addEventListener('keydown', () => {
    var password  = document.getElementById('password').value;
    pass.style.display = 'none';
    var word = document.getElementById('password');
    word.style.borderColor = 'black';
    var storage = document.getElementById('store');

    if (password.length == 0 || password.length < 2) {
        word.style.outlineColor = 'red';
        storage.classList.add('invalid');
        storage.classList.remove('valid');
    } else {
        word.style.outlineColor = 'green';
        storage.classList.add('valid');
        storage.classList.remove('invalid');
    }
})



