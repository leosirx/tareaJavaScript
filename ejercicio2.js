  // EJERCICIO 2
  
  /*
  const Array1 = ['rojo', 'azul', 'amarillo']
  const Array2 = ['blanco', 'negro', 'rojo']
  const Array3 = [4, 3, true, 'manzana']
  const Array4 = ['pera', 3, false, true, 3, true]
  */
   
  function elementoEnComun(arr1, arr2) {
      let coincidencia = [] // lista donde se van a guardar las coincidencias
      for (let i = 0; i < arr1.length; i++) {
          if (arr2.includes(arr1[i])) { // operacion para comprobar las coincidencias
              coincidencia.push(arr1[i])
              }
      }return coincidencia
  }
  
  // console.log(elementoEnComun(Array1, Array2))
  // console.log(elementoEnComun(Array3, Array4))
  