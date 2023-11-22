export const fechaTexto = (fechaParte) => {
    if(fechaParte){
        let fecha = new Date(fechaParte).toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          const palabras = fecha.split(" ");
          for (let i = 0; i < palabras.length; i++) {
            palabras[i] =
              palabras[i][0].toUpperCase() +
              palabras[i].substring(1);
          }
          const fechaMayusculas = palabras.join(" ");
          return fechaMayusculas
    }
  }
