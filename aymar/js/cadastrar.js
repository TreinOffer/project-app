document.addEventListener("DOMContentLoaded", function() {
    let login = document.querySelector(".login_dados").querySelectorAll('*');
    let cadastrar = document.getElementById("redirect");

    cadastrar.onclick = () => {
        login.forEach((one) => {
            one.style.display = "none";
        })
    };
});