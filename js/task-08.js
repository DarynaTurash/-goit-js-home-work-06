const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    
    if(formElements.email.value === "" || formElements.password.value === "") {
        alert("Усі поля форми повинні бути заповненні!");
    }

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formRef.reset();
};



