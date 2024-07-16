document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        // Optionally, you can gather form data here
        var formData = {
            firstname: document.getElementById("fname").value,
            lastname: document.getElementById("lname").value,
            area: document.getElementById("area").value,
            subject: document.getElementById("subject").value
        };



        if(!empty(formData)){
            var readableString = "";
            for (var key in formData) {
                if (formData.hasOwnProperty(key)) {
                    readableString += key.charAt(0).toUpperCase() + key.slice(1) + ": " + formData[key] + "\n";
                }
            }

            emailjs.send("service_9qngx9u","template_g3nwllr",{
                from_name: "ENQUIRY REGARDING BOOKS",
                message: readableString,
                });
        }
    });
});

function empty(formData){
    for (var key in formData) {
        if (formData.hasOwnProperty(key)) {
            if (formData[key].trim() === "") {
                alert(key + " is empty.");
                return true;
            }
        }
    }
    return false;
}