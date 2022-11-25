const form = document.querySelector("#exam-form");

//je recuperes les informations
form.addEventListener("submit", function (event){
    event.preventDefault();

    //j'ai les variables pour recuperer les informations
    const compte = document.querySelector("#compte");
    const depo = document.querySelector("#somme");


    console.log(compte.value.length);
    console.log(depo.value);

    //verifie si le compte en banque a 16 chiffres
    if(compte.value.length == 16) {
        console.log("compte = 16");

        //verifie  si le 
        if(depo > 0) {
            alert("correcte");
        } else {
            alert("erreur il faut minimum 1 €");
        }

    } else {
        alert("erreur il faut 16 chiifres dans votre compte en banque");
    }

});