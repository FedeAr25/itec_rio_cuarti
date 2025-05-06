const edad = parseInt(prompt('ingrese su edad: '))

if (edad < 13 && edad > 5) {
    alert("el valor de su entrada es $1000")

}else if (edad >= 13 && edad<= 17 ){
    alert("el valor de la entrada es de $1500")
}else if (edad <= 5){
    alert("su entrada es gratis")
}else if (edad >= 80){
    alert("es gratis")
}else if (edad > 17 && edad < 80){
    alert('el valor de la entrada es 2000')
}
