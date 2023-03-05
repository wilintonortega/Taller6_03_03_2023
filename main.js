export default{
    miFormulario:document.querySelector("#formtaller"),
    // miBoton:document.querySelector("#btn-calc2"),
    // miCaja:document.querySelector("#preciob2"),
    miRes:document.querySelector("#res2"),
    data:[],
    stopEnvio(){
        this.miFormulario.addEventListener("submit", (e)=>{
            //Obtener los datos del formulario y tranformarlo en un objeto nativo de javaScript
            // this.data.push(Object.fromEntries(new FormData(e.target)));
            //Detener el envio de datos por la url del lugar donde se encuentra el formulario
            let data=Object.fromEntries(new FormData(e.target));
            //llamo a funcion creada
            this.calcularNota(data)
            //limpiar valores formulario (cajas de texto)
            this.miFormulario.reset();
            console.table(data);
           e.preventDefault();
        })
    },
    calcularNota(data) {

    this.miRes.insertAdjacentHTML("afterbegin",`<p>Estudiante ${data.nombre}  -  Nota promedio: ${((Number.parseFloat(data.nota1)+Number.parseFloat(data.nota2)+Number.parseFloat(data.nota3))/3).toFixed(2)} </p>`)
         
    }

}