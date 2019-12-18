let buttongen = document.getElementById('generate'); 
buttongen.addEventListener('click', function () {
    document.getElementById('password').removeAttribute(
        'Readonly'  //now allows text to be written to the field after the generate password button is clicked.
        )
        document.getElementById('password').textContent = passGen();
});

function passGen() {
let userInput= prompt('Select a minimum password length between 8 and 128: ');
if(userInput>=8 && userInput<=128 && userInput !== NaN) {
    let low = 'abcdefghijklmnopqrstuvwxyz'; 
    let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeric = '0123456789';
    let spec = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
   
        while(password.length < userInput) {
            if(password.length < userInput) {
                let l = low.charAt(Math.floor(Math.random() * (low.length)));
                password += l;
            }
            if(password.length < userInput) {
                let u = up.charAt(Math.floor(Math.random() * (up.length)));
                password += u;  
            }
            if(password.length < userInput) {
                let n = numeric.charAt(Math.floor(Math.random() * (numeric.length)));
                password += n;
            }
            if(password.length < userInput) {
                let s = spec.charAt(Math.floor(Math.random() * (spec.length)));
                password += s;
            }
        }
        console.log(password);
        console.log(password.length);
        return password;
} else {
        prompt('That number is not valid.');
    }}
   
   