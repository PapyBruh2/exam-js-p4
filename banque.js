//j'ai les variables pour recuperer les informations
const form = document.getElementById("exam-form");
const compte = form.elements["compte"];
const deposer = form.elements["somme"];

//je recuperes les informations
form.addEventListener("submit", function (){
    console.log(compte.value);
    console.log(deposer.value);

    
});