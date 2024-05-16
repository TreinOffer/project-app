
document.addEventListener("DOMContentLoaded", function() {

    let botaoPix = document.getElementById("btPix");
    let botaoCredit = document.getElementById("btCredit");

    function handlePix() {
        document.getElementById("CardName").style.display = "none";
        document.getElementById("CardNumber").style.display = "none";
        document.getElementById("CardCVV").style.display = "none";
        document.getElementById("CardMes").style.display = "none";
        document.getElementById("CardAno").style.display = "none";
    }

    function handleCreditCard() {
        document.getElementById("CardName").style.display = "flex";
        document.getElementById("CardNumber").style.display = "flex";
        document.getElementById("CardCVV").style.display = "flex";
        document.getElementById("CardMes").style.display = "flex";
        document.getElementById("CardAno").style.display = "flex";
    }

    
    botaoPix.addEventListener("click",() => {
        handlePix()
     });
    
     botaoCredit.addEventListener("click",() => {
        handleCreditCard()
     });


})