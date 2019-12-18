let buttongen = document.getElementById('generate'); 
buttongen.addEventListener('click', function () {
    document.getElementById('password').removeAttribute(
        'Readonly'  //now allows text to be written to the field after the generate password button is clicked.
        )
});
