/* In this JS file we are going to write the JS/Business Logic to get the User input 
for Lead_Date__c field and we are going to Populate the Value into Salesforce as well. */

function beforesubmit(){
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');

    console.log('inputdate.value', inputdate.value);
    // When we check the typeof inputdate.value the Output is of type String.
    //But Our Lead_Date__c is of Datatype Date. 
    //So Converting String into Date with respect to the Locale of the User.

    let formattedDate = new Date(inputdate.value).toLocaleDateString('en-US');
    outputdate.value = formattedDate;
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