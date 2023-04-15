
function formRegister(event){

    event.preventDefault();

// Declaración de variables necearias para la comprobación y almacenamiento de datos de usuario

    let userName = document.getElementById("user_name").value;
    let userPassword = document.getElementById("user_password").value;
    let radioButton = document.getElementById("radio_button").value;
    let userEmail = document.getElementById("email_id").value;

// Declaración para el Almacenamiento Local

    localStorage.setItem("ls_user_name", userName);
    localStorage.setItem("ls_user_password", userPassword);
    localStorage.setItem("ls_radio_categoria", radioButton);
    localStorage.setItem("ls_user_email", userEmail);

    //redirijo hacia mi HTML de logIn
    window.location.replace("http://127.0.0.1:5500/login.html");
}
