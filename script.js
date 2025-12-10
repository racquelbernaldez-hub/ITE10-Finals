/* ================================
   SIMPLE REGISTER FUNCTION
================================ */
function register() {
    const username = document.getElementById("reg-user").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-pass").value;

    // Required fields
    if (!username || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    // Email must contain @
    if (!email.includes("@")) {
        alert("Invalid email format.");
        return;
    }

    // Check if account exists
    if (localStorage.getItem(username)) {
        alert("Username already exists. Try another.");
        return;
    }

    // Save new account
    const userData = { email, password };
    localStorage.setItem(username, JSON.stringify(userData));

    alert("Account created successfully!");
    window.location.href = "login.html";
}

/* ================================
   LOGIN FUNCTION
================================ */
function login() {
    const username = document.getElementById("login-user").value;
    const password = document.getElementById("login-pass").value;

    if (localStorage.getItem(username)) {
        const userData = JSON.parse(localStorage.getItem(username));

        if (userData.password === password) {
            alert("Login successful!");

            // Store logged user
            localStorage.setItem("loggedUser", username);

            window.location.href = "index.html";
        } else {
            alert("Wrong password.");
        }
    } else {
        alert("User not found.");
    }
}
