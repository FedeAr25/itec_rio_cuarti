const altura = parseFloat(prompt("ingrese su altura:"))
const peso = parseFloat(prompt("por favor ingrese su peso:"))

const imc = parseFloat(peso / (altura*altura))



if (imc < 18.5){ 
    alert("su imc es de :" + imc.toFixed(2) + " " + "'BAJO PESO'")
}else if (imc >= 18.5  & imc <= 24.9){
    alert( "su imc es de: "+ imc.toFixed(2) + ' '+ "¿PESO NORMAL'")
}else if (imc >= 25 & imc <= 29.9){
    alert("su imc es de: "+imc.toFixed(2)+ " "+ "'SOBREPESO'")
}else if (imc >= 30){
    alert("su imc es de: "+ imc .toFixed(2)+ ' '+ 'OBECIDAD')
}

