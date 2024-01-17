function sendMail (contactForm) { //we are passing the contactForm data through this new sendMail function
    emailjs.send("gmail", "Code_Institute_Template", { //service id & template id from EmailJS, third object are the parameters!
        "from_name": contactForm.name.value, //the values here are taken from the names we gave each field in the contactForm in the html file
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}