let captchaChecked = false;

/* In this JS file we are going to write the JS/Business Logic to get the User input 
for Lead_Date__c field and we are going to Populate the Value into Salesforce as well. */

function beforesubmit(event){
    if(captchaChecked){
        let outputdate = document.querySelector('.outputdate');
        let inputdate = document.querySelector('.inputdate');

        console.log('inputdate.value', inputdate.value);
        // When we check the typeof inputdate.value the Output is of type String.
        //But Our Lead_Date__c is of Datatype Date. 
        //So Converting String into Date with respect to the Locale of the User.

        let formattedDate = new Date(inputdate.value).toLocaleDateString('en-US');
        outputdate.value = formattedDate;
    }else{
        alert('Please Check the reCAPTCHA box to Submit the Lead.');

        //After giving alert/informing the User, we want to Stop the Submission of the form
        //For this we are using a Standard Method available on the event to stop the Default behaviour of the Submit Button.
        event.preventDefault();
    }
    
}

//Now this form is available in our Local Server. We want this form on the Web/Internat
//so we are Using Git Pages for this. 

//Adding From Genarate HTMl Form for reCAPTCHA purpose

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500); 


//Now we are Validating whether the User has Checked the reCAPTCHA Checkbox or not
// before Submitting the Form, if User doesn't check the reCAPTCHA Checkbox then 
// alert/inform the User to check the reCAPTCHA checkbox.

function captchasuccess(){
    captchaChecked = true;
}



