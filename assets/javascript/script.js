/* HTML Elements */
//Cards
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.name-and-date .name');
const cardDateMonth = document.querySelector('.name-and-date .date-month');
const cardDateYear = document.querySelector('.name-and-date .date-year');
const cardCvc = document.querySelector('.cvc');
//Form
const formErrorMsgName = document.querySelectorAll('#form-container form ul li:nth-child(1) .errormsg');
const formErrorMsgNumber = document.querySelectorAll('#form-container form ul li:nth-child(2) .errormsg');
const formErrorMsgDate = document.querySelectorAll('#form-container form ul li:nth-child(3) .card-date-container .errormsg');
const formErrorMsgCvc = document.querySelectorAll('#form-container form ul li:nth-child(3) .card-cvc-container .errormsg');
const formCotainer = document.getElementById('form-container');
const formComplete = document.getElementById('form-complete');
const formName = document.getElementById('card-name');
const formNumber = document.getElementById('card-number');
const formDateContainer = document.querySelector('#form-container form ul li:nth-child(3) .card-date-container');
const formDateMonth = document.getElementById('card-date-month');
const formDateYear = document.getElementById('card-date-year');
const formCvc = document.getElementById('cvc');
const formButton = document.getElementById('submit-button');
const formInput = document.querySelectorAll('#form-container form ul li input');
const formInputWrapper = document.querySelectorAll('.input-border-wrapper');
//Form Complete
const formCompleteButton = document.getElementById('form-complete-button');
console.log(formInputWrapper)




/* Write Values in the card */
//Name
formName.addEventListener('keyup', () => {
    cardName.innerText = formName.value;
    if(formName.value === '') {
        cardName.innerText = 'Jane Appleseed';
    }
});

//Number
formNumber.maxLength = '19'
formNumber.addEventListener('keypress', () => {
    if(formNumber.value.length === 4 || formNumber.value.length === 9 || formNumber.value.length === 14) {
        formNumber.value += ' '
    }
});
formNumber.addEventListener('keyup', () => {
    cardNumber.innerText = formNumber.value
    if(formNumber.value === '') {
        cardNumber.innerText = '0000 0000 0000 0000';
    }
})

//DateMonth
formDateMonth.maxLength = '2'
formDateMonth.addEventListener('keyup', () => {
    cardDateMonth.innerText = formDateMonth.value
    if(formDateMonth.value === '') {
        cardDateMonth.innerText = '00';
    }
})

//DateYear
formDateYear.maxLength = '2'
formDateYear.addEventListener('keyup', () => {
    cardDateYear.innerText = formDateYear.value
    if(formDateYear.value === '') {
        cardDateYear.innerText = '00';
    }
})

//CVC
formCvc.maxLength = '3'
formCvc.addEventListener('keyup', () => {
    cardCvc.innerText = formCvc.value
    if(formCvc.value === '') {
        cardCvc.innerText = '000';
    }
})
/* Change input border on focus */
document.addEventListener('click', (e) => {
    // Input 0
    if(formInput[0].contains(e.target)) {
        formInputWrapper[0].classList.add('background-gradient');
        formInput[0].style.border = '1px solid transparent';
    } else {
        formInputWrapper[0].classList.remove('background-gradient');
        formInput[0].style.border = '1px solid rgba(0, 0, 0, .5)';
    }
    
    // Input 1
    if(formInput[1].contains(e.target)) {
        formInputWrapper[1].classList.add('background-gradient');
        formInput[1].style.border = '1px solid transparent';
    } else {
        formInputWrapper[1].classList.remove('background-gradient');
        formInput[1].style.border = '1px solid rgba(0, 0, 0, .5)';
    }

    // Input 2
    if(formInput[2].contains(e.target)) {
        formInputWrapper[2].classList.add('background-gradient');
        formInput[2].style.border = '1px solid transparent';
    } else {
        formInputWrapper[2].classList.remove('background-gradient');
        formInput[2].style.border = '1px solid rgba(0, 0, 0, .5)';
    }
    
    // Input 3
    if(formInput[3].contains(e.target)) {
        formInputWrapper[3].classList.add('background-gradient');
        formInput[3].style.border = '1px solid transparent';
    } else {
        formInputWrapper[3].classList.remove('background-gradient');
        formInput[3].style.border = '1px solid rgba(0, 0, 0, .5)';
    }

    // Input 4
    if(formInput[4].contains(e.target)) {
        formInputWrapper[4].classList.add('background-gradient');
        formInput[4].style.border = '1px solid transparent';
    } else {
        formInputWrapper[4].classList.remove('background-gradient');
        formInput[4].style.border = '1px solid rgba(0, 0, 0, .5)';
    }
});


/* Validating form */
let formValidationName = false;
let formValidationNumber = false;
let formValidationDate = false;
let formValidationCvc = false
//Input patterns
const numberPattern = /[0-9]+/i;

function fromValidate() {
    // Name
    if(formName.value === '') {
        formErrorMsgName[0].classList.add('show');
    } else {
        formErrorMsgName[0].classList.remove('show');
        formValidationName = true;
    }
    // Number
    if(formNumber.value === '') {
        formErrorMsgNumber[0].classList.add('show');
        formErrorMsgNumber[1].classList.remove('show');
    } else if(numberPattern.test(formNumber.value) === false){
        formErrorMsgNumber[1].classList.add('show');
        formErrorMsgNumber[0].classList.remove('show');
    } else {
        formErrorMsgNumber[0].classList.remove('show');
        formErrorMsgNumber[1].classList.remove('show');
        formValidationNumber = true;
    }
    // Date
    if(formDateMonth.value === '' || formDateYear === '') {
        formErrorMsgDate[0].classList.add('show');
        formErrorMsgDate[1].classList.remove('show')
    } else if(numberPattern.test(formDateMonth.value) === false || numberPattern.test(formDateYear.value) === false) {
        formErrorMsgDate[1].classList.add('show');
        formErrorMsgDate[0].classList.remove('show');
    } else {
        formErrorMsgDate[0].classList.remove('show');
        formErrorMsgDate[1].classList.remove('show');
        formValidationDate = true;
    }
    // CVC
    if(formCvc.value === '') {
        formErrorMsgCvc[0].classList.add('show');
        formErrorMsgCvc[1].classList.remove('show');
    } else if(numberPattern.test(formCvc.value) === false){
        formErrorMsgCvc[1].classList.add('show');
        formErrorMsgCvc[0].classList.remove('show');
    } else {
        formErrorMsgCvc[0].classList.remove('show');
        formErrorMsgCvc[1].classList.remove('show');
        formValidationCvc = true;
    }
}
formButton.addEventListener('click', fromValidate);

// Submitting form
formButton.addEventListener('click', () => {
    if(formValidationName && 
        formValidationNumber && 
        formValidationDate &&
        formValidationCvc) {
            formCotainer.classList.add('hide');
            formComplete.classList.remove('hide');
        }
})

formCompleteButton.addEventListener('click', () => location.reload(true));



