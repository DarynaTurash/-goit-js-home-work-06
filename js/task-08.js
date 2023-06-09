const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    
    if(formElements.email.value === "" || formElements.password.value === "") {
        alert("Усі поля форми повинні бути заповненні!");
    } else {
        const userData = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };

        console.log(userData);
    };

    formRef.reset();
};



