/**
 * Handles the contact form submission.
 * Sends the form data to Formspree, displays a success or error message,
 * and redirects to the contact page after a short delay on success.
 * @param {Event} event - The form submit event.
 */
function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xjkpqlnd", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        const transmit = document.getElementById("transmit");
        if (transmit) {
            transmit.innerHTML = 'Erfolgreich gesendet !'
        }
        setTimeout(() => {
            window.location.href = "./contact.html?stauts=success";
        }, 3000);
    }).catch((error) => {
        console.log(error);
        transmit.innerHTML = 'Fehler beim Senden';
    });
}