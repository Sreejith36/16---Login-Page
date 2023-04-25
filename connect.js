
function click1() {
    var v  = document.getElementById("user-name").value;
    var pw = document.getElementById("password").value;
    // document.getElementById("display").innerHTML = v;
    if(v == "admin" && pw == "enter2563"){
        // alert("Correct");
        location.replace("welcomeUser.html");
    }  

    if(v != "admin") {
        alert("Wrong User Name")
    }

    if(v == "admin" && pw != "enter2563") {
        alert("Wrong Password")
    }

}


function showme(){
    let pass1 = document.getElementById("password");
    if(pass1.type === "password"){
        pass1.type = "text";
    }
    else {
        pass1.type = "password";
    }
}