//Custom Fucntion for looping through all Email Fields.
function looped() {
    var fieldTags = [];
    var fieldClasses = [];
    fieldTags = document.getElementsByTagName("input");
    for (var i = 0; i < fieldTags.length; i++) {
        fieldClasses[i] = fieldTags[i].className;
        checkField(fieldClasses[i])

    }

}
// Custom Function for Field Checking.
function checkField(fieldClass) {

    var val = document.getElementsByClassName(fieldClass)[0].value;
    //To Check If the Field is Filled OR Not.
    if (val === "") {
        alert(fieldClass + " required.");
    }
    //To Check If the Email is Valid OR Not.
    if (val !== "" && fieldClass == "Email") {
        var eMail = val;
        var forAtTheRate = eMail.indexOf("@")
        var forDotCom = eMail.indexOf(".com")
        if (forAtTheRate === -1 || forDotCom === -1) {
            alert("Invalid Email.")
        }
    }
    //To Check If the Password is 8 Characters long.
    if (val !== "" && fieldClass == "Password Confirmation") {
        var passLimit = document.getElementsByClassName("Password")[0].value
        var confirmPass = document.getElementsByClassName("Password Confirmation")[0].value
        if (passLimit.length < 8) {
            alert("Password Must Contain atleast 8 characters.")
        }
        //To Cehck If the Confirm Password Match.
        else if (confirmPass !== passLimit) {
            alert("Confirm Password does not match.")
        }
    
    }

}