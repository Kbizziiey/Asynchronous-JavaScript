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

    // Validate age
    const ageInput = document.getElementById('age');
    const ageError = document.getElementById('ageError');
    const ageValue = parseInt(ageInput.value,10);
    if(isNaN(ageValue) || ageValue < 18 || ageValue > 99){
        ageError.textContent = 'Age must be between 18 and 99';
        return;
    }

    //Word count validation
    const trimmedText = messageValue.trim();
    const wordCount = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;
    if (wordCount > 100) {
        messageError.textContent = 'Message cannot exceed 100 words.';
        return;
    }
})
