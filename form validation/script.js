const form = document.getElementById("registrationform");

form.addEventListener('submit',function(event){
    event.preventDefault(); //prevent form submission

    // Clear previous errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Validate email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
    }
})
