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