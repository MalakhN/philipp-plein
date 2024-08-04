const form = document.querySelector('.footer__newsletter-form');
const formFieldset = document.querySelector('.footer__newsletter-form-container');
const inputElement = document.querySelector('.footer__newsletter-input');
const buttonElement = form.querySelector('.footer__newsletter-btn');

startValidation();

function startValidation() {
  toggleButton();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (hasInvalidInput()) {
      checkInputValidity(inputElement);
      toggleInputError(inputElement);
    }
  })
  inputElement.addEventListener('input', () => {
    checkInputValidity(inputElement);
    toggleButton();
  })
  inputElement.addEventListener('blur', () => {
    toggleInputError(inputElement);
  })
  inputElement.addEventListener('focus', () => {
    toggleErrorSpan(inputElement);
  })
}

function checkInputValidity(inputElement) {
  inputElement.validity.patternMismatch;
}

function hasInvalidInput() {
  return (
    inputElement => !inputElement.validity.valid
  )
}

function toggleErrorSpan(inputElement, errorMessage){
  const errorElement = document.querySelector('.footer__newsletter-input-error');
  if (errorMessage) {
    formFieldset.classList.add('footer__newsletter-form-container_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('footer__newsletter-input-error_active');
  } else {
    formFieldset.classList.remove('footer__newsletter-form-container_error');
    errorElement.textContent = '';
    errorElement.classList.remove('footer__newsletter-input-error_active');
  }
}

function toggleButton() {
  if (hasInvalidInput()) {
    buttonElement.classList.add('button-inactive');
    buttonElement.setAttribute('aria-disabled', 'true');
  } else {
    buttonElement.classList.remove('button-inactive');
    buttonElement.setAttribute('aria-disabled', 'false');
  }
}

function toggleInputError(inputElement) {
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage);
  } else {
    toggleErrorSpan(inputElement);
  }
}







