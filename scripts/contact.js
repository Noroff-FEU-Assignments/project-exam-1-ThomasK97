const cForm = document.querySelector("form[name='contact-banner']");
const nInput = document.querySelector("input[name='name']");
const eInput = document.querySelector("input[name='email']");
const sInput = document.querySelector("input[name='subject']");
const mInput = document.querySelector("textarea[name='message']");

nInput.isValid = () => !!nInput.value;
eInput.isValid = () => isValidEmail(eInput.value);
sInput.isValid = () => !!sInput.value;
mInput.isValid = () => !!mInput.value;

const inputFields = [nInput, eInput, sInput, mInput];

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

let validate = false;
let isFormValid = false;

const validateInputs = () => {
    console.log("testing testing");
    if (!validate) return;

    isFormValid = true;
    inputFields.forEach((input) => {
        input.classList.remove("invalid");
        input.nextElementSibling.classList.add("hide");

        if(!input.isValid()) {
            input.classList.add("invalid");
            isFormValid = false;
            input.nextElementSibling.classList.remove("hide");
        }
    });
};

cForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validate = true;
    validateInputs();
    if (isFormValid) {

    }
});





