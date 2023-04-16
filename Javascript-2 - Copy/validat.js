const submit_button = document.querySelector(".button");

submit_button.onclick = (e) => {
    e.preventDefoult();

    const fname = document.getElementById("fname").value;
    const Iname = document.getElementById("Iname").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("FirstName", fname);
    localStorage.setItem("LastName", Iname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
    localStorage.setItem("Cpassword", cpass);
};

// some condition
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

if (
    fname === "" &&
    Iname === "" &&
    email === "" &&
    pass === "" &&
    cpass === ""
) {
    swal("Oops..!", "Input fields must be filled", "error");
    document.getElementById("fname-error").innerText =
        "Please enter your first name";
    document.getElementById("Iname-error").innerText =
        "Please enter your last name";
    document.getElementById("email-error").innerText = "Please enter your email";
    document.getElementById("pass-error").innerText =
        "Please enter your password";

    document.getElementById("cpass-error").innerText =
        "Please confirm your password";
} else if (fname === "") {
    document.getElementById("fname-error").innerText =
        "Please enter your first name";
} else if (Iname === "") {
    document.getElementById("Iname-error").innerText =
        "Please enter your last name";
} else if (!email.match(emailRegex)) {
    document.getElementById("email-error").innerText = "email isnt valid";
} else if (email === "") {
    document.getElementById("email-error").innerText = "Please enter your email";
} else if (pass === "" && pass >= 6) {
    document.getElementById("pass-error").innerText =
        "Please enter your password and password 6 number ";
} else if (cpass === "") {
    document.getElementById("cpass-error").innerText =
        "Please confirm your password";
} else if (cpass !== pass) {
    document.getElementById("cpass-error").innerText = "Passwords do not match!";
} else {
    swal("Good job!", "Registration successful", "success");
}
