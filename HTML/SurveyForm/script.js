function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const maleChecked = document.getElementById("male").checked;
    const femaleChecked = document.getElementById("female").checked;
    const gender = maleChecked ? "Male" : (femaleChecked ? "Female" : "N/A");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!validatePhoneNumber(mobile)) {
        alert('Enter valid Phone Number');
    }
   
    if(!ValidateEmail(email))
    {
        alert('Enter valid Email');
    }
    if (firstName && lastName && dob && country && (maleChecked || femaleChecked) && profession) {

        const result = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        document.getElementById("popupResult").innerHTML = result;
        $('#popup').modal('show');
    } else {
        alert("Please fill out all the fields.");
    }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    $('#popup').modal('hide');
    resetForm();
}

function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(input_str);
}
function ValidateEmail(mail) {
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return em.test(mail);
}