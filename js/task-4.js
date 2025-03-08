
const form = document.querySelector(".login-form");

form.addEventListener("submit",handleForm);

function handleForm(event){
    event.preventDefault();

    const elementsOnForm = event.target.elements;

    const loginValue = {
        email: elementsOnForm.email.value,
        pass: elementsOnForm.password.value
    }
    if(loginValue.email.length && loginValue.pass.length){
        console.log(loginValue); 
    }else{
        alert('All form fields must be filled in');
    }
    form.reset();
}

