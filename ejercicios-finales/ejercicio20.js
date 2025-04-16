const usuarios = {
  'Nicolas': 'asd1234',
  'Cinthya':'dsa4321'
  }


const usuarioIngresado = prompt('Ingrese su nombre de usuario: ')
const contraseñaIngresada = prompt('Ingrese su contraseña: ')

if(usuarios[usuarioIngresado] && usuarios[usuarioIngresado] == contraseñaIngresada){
  console.log('Acceso permitido')
} else {
  console.log('Acceso denegado')
}
