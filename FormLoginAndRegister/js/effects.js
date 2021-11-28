
function showPassword() {
    var x = document.getElementById("inputPassword");
    var y = document.getElementById("open");
    var z = document.getElementById("close");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

// function goToLogin(){
//     var x = document.getElementById("btnLogin");

//     if(x.onclick){
//         window.location = "index.jsp";
//     }
// }

// function goToRegister(){
//     var x = document.getElementById("btnRegister");

//     if(x.onclick){
//         window.location = "Register.html";
//     }
// }

/* function borderFocusText() {
    var fijador1 = false;
    try {
        try {
            var x = document.getElementById("content-i-Text");
            fijador1 = true;
        } catch (error) {

        }
    } catch (error) {
        alert("Fail");
    }
    if (fijador1 == true) {
        x.style.borderColor = "#1877f2";
    }
}

function borderFocusPass() {
    var fijador1 = false;
    try {
        try {
            var x = document.getElementById("content-i-Pass");
            fijador1 = true;
        } catch (error) {

        }
    } catch (error) {
        alert("Fail");
    }
    if (fijador1 == true) {
        x.style.borderColor = "#1877f2";
    }
} */




