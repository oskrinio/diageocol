function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function removeCookie(cname) {
    setCookie(cname, "", -1);
}

function validarEdadInicio() {
    console.log("validandoEdadInicio");
    document.getElementById("btn-si").addEventListener("click", function () { ageOK() }, false);
    document.getElementById("btn-no").addEventListener("click", function () { ageKO() }, false);
}

function ageOK() {
    setCookie("age-validation", "OK", 1);
    top.location = 'https://dev--diageocol.myvtex.com/';
}

function ageKO() {
    removeCookie("age-validation");
}

function inicio(opc) {
    var age = getCookie("age-validation");
    switch (opc) {
        case "inicio":
            if (age == "") {
                top.location = 'https://dev--diageocol.myvtex.com/age-verification';
            }
            break;
        case "validar":
            
            if (age == "OK") {
                top.location = 'https://dev--diageocol.myvtex.com/';
            }
            else{
                validarEdadInicio();
            }

            break;
    }
}
