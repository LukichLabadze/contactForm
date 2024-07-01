const btn = document.getElementById('submit');
const inputs = document.querySelectorAll('.firstname input');
const errors = document.querySelectorAll('.firstname .error');
const emailInput = document.querySelector('.email input');
const emailError = document.getElementById('error-e');
const invalidEmailError = document.getElementById('invalid-email-e');

const querys = document.querySelectorAll('.radio-1 input[type="radio"]')
const queryError = document.querySelectorAll('.query-error')

const text = document.getElementById('message-area')
const textError = document.getElementById('text-error')

const checkbox = document.getElementById('check')
const checkError = document.getElementById('check-e')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', function() {
    let isValid = true;
    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            errors[index].style.display = 'block';
            isValid = false;
        } else {
            errors[index].style.display = 'none';
        }
    });

    if (emailInput.value.trim() === '') {
        emailError.style.display = 'block';
        invalidEmailError.style.display = 'none';
        isValid = false;
    } else {
        emailError.style.display = 'none';

        if (!emailRegex.test(emailInput.value.trim())) {
            invalidEmailError.style.display = 'block';
            invalidEmailError.style.color = 'red'
            isValid = false;
        } else {
            invalidEmailError.style.display = 'none';
        }
    }

    const isRadioSelected = Array.from(querys).some(radio => radio.checked);
    if (!isRadioSelected) {
      queryError.forEach((error) => {
        error.style.display = 'block'
        error.style.color = 'red'
      });
        isValid = false;
    } else {
      queryError.forEach(error => error.style.display = 'none');
    }

    if (text.value == ''){
      textError.style.display = 'block'
    } else {
      textError.style.display = 'none'
    }

    if(!checkbox.checked){
      checkError.style.display = 'none'
    }else{
      checkError.style.display = 'block'
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});