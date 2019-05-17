/**
 * Acá escribo la lógica de mi módulo
 */
alert("Hola Bootcamp!");

// Ejemplo de clase
class Bootcamp {
  hola() {
    console.log('Hola desde la consola')
  }
}
let b = new Bootcamp();
b.hola();


// Ejemplo de función asíncrona
async function test() {
  return 'Este es el resultado!';
}

// Usando then
test().then(function(result){
  console.log(result)
})

// usando await
async function callTest(){
  let result = await test();
  console.log(result);
}

callTest();