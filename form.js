function verifyPassword() {
    let pw = document.getElementById("password").value;
    let pwc = document.getElementById("confirmPassword").value;
    let passwordmatchmsg = document.getElementById("passwordMatchMessage");

    if(pw != pwc) {
        passwordmatchmsg.textContent = "Passwords do not match";
        return false;
    } else {
        passwordmatchmsg.textContent = "";
        return true;
    }

}
