//not exactly D.R.Y., but it's FUNCTIONAL!!!!!
//password generator function
function passGen() { 
    let userInput= prompt('Select a minimum password length between 8 and 128: ');
     //This ensures that the user selects a valid password length that is a number
    if(userInput>=8 && userInput<=128 && userInput !== NaN) {
        let low = 'abcdefghijklmnopqrstuvwxyz'; 
        let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numeric = '0123456789';
        let spec = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let password = '';
        //This is where the user is prompted for character types they would like their password to contain
        let lowReq = confirm('Would you like your password to contain lower case letters?');
        let upReq = confirm('Would you like your password to contain upper case letters?');
        let numReq = confirm('Would you like your password to contain numbers?');
        let specReq = confirm('Would you like your password to contain special characters?');

        //This statement tells user they must have at least one type, the rest of the function
        //will not run until at least one of the types returns true.
        if(lowReq === false && upReq === false && numReq === false && specReq === false) {
            alert("Your new password must contain at least one character type. Please try again.")
        } else {

        while(password.length < userInput) {
            //This will run if user selected ok for lower letters at prompt and password length has not been reached
            if(password.length < userInput && lowReq === true) { 
                let l = low.charAt(Math.floor(Math.random() * (low.length)));
                password += l;
            }
            //This will run if user selected ok for upper letters at the prompt and password length has not been reached
            if(password.length < userInput && upReq === true) { 
                let u = up.charAt(Math.floor(Math.random() * (up.length)));
                password += u;  
            }
            //This will run if user selected ok for numbers at the prompt and password length has not been reached
            if(password.length < userInput && numReq === true) {
                let n = numeric.charAt(Math.floor(Math.random() * (numeric.length)));
                password += n;
            }
            //This will run if user selected ok for special characters at the prompt and password length has not been reached
            if(password.length < userInput && specReq === true) {
                let s = spec.charAt(Math.floor(Math.random() * (spec.length)));
                password += s;
            }
        }
    }
        //this makes the chosen password characters appear in a more random order.
        password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
        console.log(password);
        console.log(password.length);
        return password;
    } else {
        alert('That was not a valid input! Please try again.');
    }
}   


//added event listener to allow click of generate button to trigger the genPass function
document.getElementById('generate').addEventListener('click', function () {
    //now allows text to be written to the field after the generate password button is clicked.
    document.getElementById('password').removeAttribute('Readonly');
    //this allows the output of genPass function to be output to the password field in the form.    
    document.getElementById('password').textContent = passGen();
    //If anyone could tell me how to get rid of the "[Violation] 'click' handler took ---ms" that 
    //pops up in the console log, would be greatly appreciated!
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