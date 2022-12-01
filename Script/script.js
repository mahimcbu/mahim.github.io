function validateForm(){
    let firstname = document.getElementById("firstName");
    let lastname = document.getElementById("lastName");
    let feedback = document.getElementById("feedback");
    let fnameError = document.getElementById("firstNameError");
    let lnameError = document.getElementById("lastNameError")
    fnameError.style.color = "red";
    lnameError.style.color = "red";

    let regex = /^[A-Za-z]+$/;    
    
    if ((!firstName.value.match(regex)) || ((firstName.value.length <=2)))
    {
        fnameError.innerHTML ="Lastname has to be more than 2 alpha characters long";
        return false;
    }else if ((!lastName.value.match(regex)) || ((lastName.value.length<=2)))
    {
        lnameError.innerHTML= "Lastname has to be more than 2 alpha characters long";
        return false;

    }
    fnameError.innerHTML = "";
    lnameError.innerHTML = "";
    return true;
}
