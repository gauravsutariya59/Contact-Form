const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const contact = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        message: document.getElementById("message").value

    };

    try {

        const response = await fetch("http://localhost:8080/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(contact)

        });

        if (response.ok) {

            alert("Message Sent Successfully!");

            contactForm.reset();

        } else {

            alert("Failed to send message.");

        }

    } catch (error) {

        console.error(error);

        alert("Server is not running.");

    }

});