// function to show more info on click of read more button

function valid(){
    const regexemail = /^[a-z0-9._]+@[a-z.-]+\.[a-zA-Z]{2,}$/;
    const regexnumber = /^[0-9]{10,10}$/;
debugger;
    const email = document.getElementById('recipient-email').value;
    const number = document.getElementById('recipient-number').value;
    // setTimeout (function () { document.getElementById ('submit-btn').onclick (); }, 30000); 
    const form = document.querySelector("#exampleModal")
    const submitButton = document.querySelector("#Connect")
    //const requestBody = new FormData(form)
    var data = { Email: email, Mobile : number , Name: "ufygv ", Message: " jvgv"};
    // var FormData = new FormData(document.getElementById("exampleModal"));
    if(regexnumber.test(number) && regexemail.test(email)){
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzwOjmsQVu-_Qmu2RxhtZi3je5uZje_FigIpUHJMx1e2xm0_Z8DCqnf4SZE0t96Jp1S/exec';

        debugger;
        // document.getElementById("reach-form").reset(); // Clear form data
        // window.location.href = "index.html";   // Redirecting to other page.
        fetch(scriptURL, {
    method: 'POST',
    body: data,
    headers: {
        'Content-Type': 'text/plain;charset=utf-8',
    }
}).then(response => {
    console.log("success", response);
}).catch(err => {
    console.log("Error" + err);
});
        fetch(scriptURL, { method: 'POST', body: data})
        console.log(data)
            .then((response) => {
                console.log('Success!', response);
                window.location.href = "index.html";   // Redirecting to other page.
                alert('Success!', response )    // alert message after submitting the form
                submitButton.disabled = true })// disable submit button after submitting the form         })
            .catch(error => {
                alert('Error!', error.message)  // alert message if error occurs
                submitButton.disabled = false   // enable submit button if error occurs
            }
            )
       return false;
    }
    // else if(!regexemail.test(email)){
    //     alert("Invalid email address. Please enter a valid email address.")
    //     return false;
    // }
    // else{
    //     alert("Invalid Mobile Number. Please enter a valid 10 digit mobile number.")
    //     return false;
    // }

}
