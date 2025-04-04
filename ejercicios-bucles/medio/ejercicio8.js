const familia = [{
  nombre: 'Martina',
  apellido: 'Semperena',
  edad: 16,
  parentezco: 'Hija'
},
{
  nombre: 'Malena',
  apellido: 'Semperena',
  edad:21,
  parentezco: 'Hija'
},
{
  nombre:'Oscar',
  apellido: 'Semperena',
  edad:48,
  parentezco: 'Padre'
},
{
  nombre:'Gabriela',
  apellido: 'Ratto',
  edad: 56,
  parentezco: 'Madre'
}]

for(let i = 0; i < familia.length; i++){
  console.log(`Hola, soy ${familia[i].nombre} ${familia[i].apellido} (${familia[i].parentezco}) y tengo ${familia[i].edad} años.`)
}
