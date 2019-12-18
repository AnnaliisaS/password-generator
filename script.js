let buttongen = document.getElementById('generate'); 
buttongen.addEventListener('click', function () {
    document.getElementById('password').removeAttribute(
        'Readonly'  //now allows text to be written to the field after the generate password button is clicked.
        )
});

let low = 'abcdefghijklmnopqrstuvwxyz'; 
let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numeric = '0123456789';
let spec = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
let password = '';

let userInput= prompt('Select a minimum password length between 8 and 128: ');
if(userInput>=8 && userInput<=128 && userInput !== NaN) {
    passGen();
} else {
        prompt('That number is not valid.');
    }