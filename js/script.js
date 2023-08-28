
const form = document.querySelector('.contact-form')
const userEmail = document.getElementById('user-email');
const submit = document.querySelector('.btn-contact-form')
const userName = document.getElementById('user-name')
const emailError = document.querySelector('.email-error')



userEmail.addEventListener('input', inputData)

function inputData(){
    if (userEmail.validity.valid) {
        emailError.textContent = ""; 
      } else {
        errorMessage();
      }
    };


form.addEventListener('submit', (event) =>{
    event.preventDefault()
    if (!userEmail.validity.valid) {
    errorMessage()
    } else {
        Notiflix.Notify.success('Thank you for reaching out to us!')
        form.reset()
    }
}
   
)

function errorMessage(){
    if (userEmail.validity.valueMissing) {
        emailError.textContent ="You need to enter an email address.";
      } else if (userEmail.validity.typeMismatch) {
        emailError.textContent ="Entered value needs to be an email address.";
      } else if (userEmail.validity.tooShort) {
        emailError.textContent = `Email should be at least ${userEmail.minLength} characters; you entered ${userEmail.value.length}.`; ;
      }
    
}
