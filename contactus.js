function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value, 
    }
    emailjs.send("service_z4cr9zc", "template_oboom0e",parms)
}