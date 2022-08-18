
// ai dke getInputFieldValueById function diye jekono id niye tar value return kore
function getInputFieldValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value ;
    const inputFieldValue=parseFloat(inputFieldValueString);
    // jeheto input field er value niya nisi akon field ta clear kore dsi
    inputField.value='';
    return inputFieldValue;
}
// ai function diye kono element er value number a convert kora hoy
function getElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueString=element.innerText;
    const value=parseFloat(elementValueString);
    return value;

} 
// ai function diya ager kono value er jaygay notun value dwa hoy
function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}