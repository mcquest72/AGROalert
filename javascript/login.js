// Variables

const RegistrationFormdiv = document.getElementById('Registration_Form_Container');
const LoginFormdiv = document.getElementById('Login_Form_Container');
const ForgotPassworddiv = document.getElementById('Forgot_Password_Form_Container');
const SignUpSuccessfulMessage = document.getElementById('sign_up_successful_message');

const swapToRegistration = document.getElementById('Register_instead_link');
const swapToLogin = document.getElementById('Login_instead_link');
const swapToPasswordRecovery = document.getElementById('password_recovery_link');
const backToLogin = document.getElementById('back_to_login_instead_link');
const signUpSuccessful = document.getElementById('Register_btn');

RegistrationFormdiv.style.display = "none";
ForgotPassworddiv.style.display = "none";
SignUpSuccessfulMessage.style.display = "none";


// addEventListeners

swapToRegistration.addEventListener("click", (e) => {
    RegistrationFormdiv.style.display = "block";
    LoginFormdiv.style.display = "none";
    ForgotPassworddiv.style.display = "none";
});  

swapToLogin.addEventListener("click", (e) => { 
    RegistrationFormdiv.style.display = "none";
    LoginFormdiv.style.display = "block";
    ForgotPassworddiv.style.display = "none";
});

swapToPasswordRecovery.addEventListener("click", (e) => { 
    RegistrationFormdiv.style.display = "none";
    LoginFormdiv.style.display = "none";
    // ForgotPassworddiv.style.display = "block";
});

backToLogin.addEventListener("click", (e) => { 
    RegistrationFormdiv.style.display = "none";
    LoginFormdiv.style.display = "block";
    ForgotPassworddiv.style.display = "none";
});

signUpSuccessful.addEventListener("click", (e) => {    
    RegistrationFormdiv.style.display = "none";
    LoginFormdiv.style.display = "block";
    ForgotPassworddiv.style.display = "none";
    alert('Success! Login to your dashboard to explore more.');
    SignUpSuccessfulMessage.style.display = "block";
});


// functions

