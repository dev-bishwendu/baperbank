//login form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let userName = document.getElementById('email').value;
    let userPass = document.getElementById('password').value;

    if(userName == "admin@gmail.com" && userPass == "admin") {
        window.location.href = "dashboard.html";
    } else {
        alert("invalid access");
    }
})
