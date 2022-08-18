
document.getElementById("btn-deposit").addEventListener('click',function(){
    // ai dke newDepositAmount er modde function er value ta diye dewa hoise  aidta hocche oi function jaitay input er value ta number akare newa hoise
    const newDepositAmount=getInputFieldValueById('deposit-field');
    // ai dke previousDepositTotal er modde getElementValueById diye dewa hoise aitay jai dke deposit show hoy tar value tare previous a niya nicche
    const previousDepositTotal=getElementValueById('deposit-total');
    // akon amta notun deposit akta variabe niboo jar modde previous ar new deposit jog kore dvo 
    const newDepositTotal=previousDepositTotal+newDepositAmount;
    // akon notun je mot deposit hoise ta show korte function tare call kore dvo
    setTextElementValueById('deposit-total',newDepositTotal);
    // akon amra function use kore upor er main balance ta pabo ar previous a rhakbo
    const previousBalanceTotal=getElementValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal)
})
