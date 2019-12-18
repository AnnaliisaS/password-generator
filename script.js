
//password generator function
function passGen() { 
let userInput= prompt('Select a minimum password length between 8 and 128: ');
if(userInput>=8 && userInput<=128 && userInput !== NaN) {
    let low = 'abcdefghijklmnopqrstuvwxyz'; 
    let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeric = '0123456789';
    let spec = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
    //since there is a requirement that the user have one of each character type, 
    //I designed the function to automatically generate one of each minimum, 
    //You have to have all in order to meet the minimum total character requirement of 8.
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
        alert('That was not a valid input! Please try again.');
    }}


//added event listener to allow click of generate button to trigger the genPass function
document.getElementById('generate').addEventListener('click', function () {
    //now allows text to be written to the field after the generate password button is clicked.
    document.getElementById('password').removeAttribute('Readonly')
    //this allows the output of genPass function to be output to the password field in the form.    
    document.getElementById('password').textContent = passGen();
});

   
//added event listener to allow click of copy button to trigger the copyText function
document.getElementById("copy").addEventListener("click", copyText);
    //copy text function
    function copyText() { 
      var copyText = document.getElementById("password");
      copyText.select();
      copyText.setSelectionRange(0, 99999); //For mobile devices
      document.execCommand("copy");
    }