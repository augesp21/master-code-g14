
// clientes disponibles

var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 }
];

function displayUsuario (cliente){
  /* let resp = fetch("ca-index.html", {
    method: 'GET',
 }).then(function(resp){
   console.log(resp)
 }) */
 for(var i = 0; i < cuentas.length; i++)
  if (cliente == cuentas[i].nombre){
    document.getElementById("output").innerHTML = "Hola " + cuentas[i].nombre + " tu saldo es de $" + cuentas[i].saldo + " pesos"
  }
}

displayUsuario("Mali")
//console.log(displayUsuario)

//obtener los datos del imput
//buscar el cliente logueado dentro de las cuentas
//sumar el valor del input a las cuentas globales
// mostrar en pantalla



function depositarSaldo (cantidad, cliente){
  for(var i = 0; i < cuentas.length; i++){
    if(cliente == cuentas[i].nombre){
      cuentas[i].saldo += Number(cantidad)
    }
  }
} 



//funcion para obtener los datos del input


function agregarSaldo(){
  let input = document.getElementById("ingresoCantidad").value
  depositarSaldo(input, "Mali")
  displayUsuario("Mali")
}

//funcion para retirar saldo

function retirarSaldo(){
  let input = document.getElementById("retiroCantidad").value
  retiro(input, "Mali")
  displayUsuario("Mali")
  document.getElementById("retiroCantidad").value = 0
}

function retiro (cantidad, cliente){
  for(var i = 0; i < cuentas.length; i++){
    if(cliente == cuentas[i].nombre){
      cuentas[i].saldo -= Number(cantidad)
    }
  }
} 


