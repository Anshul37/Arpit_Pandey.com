//  funtion to check if the email and number is valid or not
//  if not valid then it will show error message
//  if valid then it will return true
//  and the form will be submitted
//  and the user will be redirected to the index.html page

function valid(){
    const regexemail = /^[a-z0-9._]+@[a-z.-]+\.[a-zA-Z]{2,}$/;
    const regexnumber = /^[0-9]{10,10}$/;
    const email = document.getElementById("email").value;
    const number = document.getElementById("phoneno").value;

    if(regexemail.test(email) && regexnumber.test(number)){
        return true;
    }
    else{
        if(!regexemail.test(email)){
            document.getElementById("emailerror").innerHTML = "Please enter a valid email address";
        }
        else{
            document.getElementById("emailerror").innerHTML = "";
        }
        if(!regexnumber.test(number)){
            document.getElementById("numbererror").innerHTML = "Please enter a valid number";
        }
        else{
            document.getElementById("numbererror").innerHTML = "";
        }
        return false;
}
}