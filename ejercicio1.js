// EJERCICIO 1

function piramide(num) {
    for (let i = 1; i <= num; i++) {
      let fila = "";                       //cantidad de filas
      for (let x = 1; x <= i; x++) {
        fila += x;                         //concatenando "x"
      }
      console.log(fila);
    }
  }
  
  // piramide(3)
  // piramide(6)
  





  