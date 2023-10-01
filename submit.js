const contactForm = document.getElementById("contactForm");

const emailInput = document.getElementById("emailInput");


const thankyouMessageEl = document.getElementById("thankyouMessage");

function hideThankyouMessage() {
    thankyouMessageEl.style.opacity = 0
}




function submitForm(event) {
    event.preventDefault(); 
    fetch("https://formbold.com/s/3KAvN", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `email-${emailInput.value}`
    })

    contactForm.reset();

    thankyouMessageEl.style.opacity = 1;
    setTimeout(hideThankyouMessage, 2000);
}


contactForm.addEventListener("submit", submitForm)