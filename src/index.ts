let btnIngresar = document.getElementById("btnIngr");

btnIngresar.addEventListener("click", () => {
  let sueldoActual: number = Number(dato.value);
  let aumento: number = 0;
  let sueldoNuevo: number = 0;

  if (sueldoActual > 25000) {
    console.log("Tus sueldo no recibe aumento");
    console.log("Por lo tanto, cobraras:", sueldoActual);
  } else {
    if (sueldoActual <= 15000) {
      aumento = sueldoActual * 0.2;
      sueldoNuevo = sueldoActual + aumento;
      console.log("Tus sueldo recibe un 20% de aumento");
      console.log("Por lo tanto, cobraras:", sueldoNuevo);
    } else {
      if (sueldoActual <= 20000) {
        aumento = sueldoActual * 0.1;
        sueldoNuevo = sueldoActual + aumento;
        console.log("Tus sueldo recibe un 10% de aumento");
        console.log("Por lo tanto, cobraras:", sueldoNuevo);
      } else {
        aumento = sueldoActual * 0.05;
        sueldoNuevo = sueldoActual + aumento;
        console.log("Tus sueldo recibe un 5% de aumento");
        console.log("Por lo tanto, cobraras:", sueldoNuevo);
      }
    }
  }
});
