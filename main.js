function signup(){
    srNm = document.getElementById("srNmNpt").value;
    pssWrd = document.getElementById("pssWrdNpt").value;

    localStorage.setItem("user_nm", srNm);
    localStorage.setItem("pssWrd", pssWrd);

    window.location = "chat.html";
}

function login(){
    userName = document.getElementById("srNmNpt").value;
    passWord = document.getElementById("pssWrdNpt").value;
    
    username = localStorage.getItem("user_nm");
    password = localStorage.getItem("pssWrd");

    if(userName == username && passWord == password){
        window.location = "chat.html";
    }
    
}