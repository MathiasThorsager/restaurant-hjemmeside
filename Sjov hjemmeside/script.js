document.getElementById("orderForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value
let order=document.getElementById("orderText").value
let allergy=document.getElementById("allergy").value

let mail="mailto:restaurant@email.dk"
+"?subject=Bestilling fra "+name
+"&body=Bestilling: "+order+"%0AAllergier: "+allergy

window.location.href=mail

})