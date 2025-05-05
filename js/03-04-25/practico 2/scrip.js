const monto = parseInt(prompt('ingrese el monto a abonar: '))
const calidad = prompt('introduce como fue el servicio segun malo , bueno o exelente:')

if (calidad == "malo"){
    alert("la propina a abonar es: " + "$" +monto +' + ' + '$'  + parseInt(monto*0.10))
}else if (calidad == "bueno"){
    alert("la propina a abonar es: " + "$" +monto +' + ' + '$' + parseInt(monto*0.15))
}else if (calidad == "exelente"){
    alert("la propina a abonar es: " + "$" +monto +' + ' + '$' + parseInt(monto*0.20))
}else {
    alert("introduzca una calidad de servicio valida")
}