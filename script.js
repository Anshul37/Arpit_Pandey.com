

// document.getElementById("reach-form").reset();



//   function of reach out button to open the form and show its data on excel sheet
function showdata() {
const form = document.querySelector("#exampleModal")
const submitButton = document.querySelector("#Connect")
const scriptURL = 'https://script.google.com/macros/s/AKfycbzwOjmsQVu-_Qmu2RxhtZi3je5uZje_FigIpUHJMx1e2xm0_Z8DCqnf4SZE0t96Jp1S/exec'
form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    document.getElementById("reach-form").reset();

    fetch(scriptURL, { method: 'POST', body: requestBody})

        .then(response => {
            alert('Success!', response)     // alert message after submitting the form
            submitButton.disabled = false   // enable submit button after submitting the form
        })
        .catch(error => {
            alert('Error!', error.message) // alert message if error occurs 
            submitButton.disabled = false   // enable submit button if error occurs
        
        }
        )
    })

}

// function to show more info on click of read more button
