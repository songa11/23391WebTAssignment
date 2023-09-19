const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    let allInputsSuccessful = true;

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const dateValue = date.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'First name is required');
        allInputsSuccessful = false;
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last name is required');
        allInputsSuccessful = false;
    } else {
        setSuccess(lastname);
    }

    if(dateValue === '') {
        setError(date, 'Birthdate is required');
        allInputsSuccessful = false;
    } else {
        setSuccess(date);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        allInputsSuccessful = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        allInputsSuccessful = false;
    } else {
        setSuccess(email);
    }


    if(passwordValue === '') {
        setError(password, 'Password is required');
        allInputsSuccessful = false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
        allInputsSuccessful = false;
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        allInputsSuccessful = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        allInputsSuccessful = false;
    } else {
        setSuccess(password2);
    }
    
    
    if (allInputsSuccessful) {
        alert("Registered successfully!!");
        window.location.href = "login.html";
    }
};
