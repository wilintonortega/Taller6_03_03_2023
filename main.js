export default{
    miFormulario:document.querySelector("#formtaller"),
    miBoton:document.querySelector("#btn-calc2"),
    miCaja:document.querySelector("#preciob2"),
    miRes:document.querySelector("#res2"),
    data:[],
    stopEnvio(){
        this.miFormulario.addEventListener("submit", (e)=>{
            //Obtener los datos del formulario y tranformarlo en un objeto nativo de javaScript
            // this.data.push(Object.fromEntries(new FormData(e.target)));
            //Detener el envio de datos por la url del lugar donde se encuentra el formulario
            let data=Object.fromEntries(new FormData(e.target));
            //llamo a funcion creada
            this.calcularImp(data)
            //limpiar valores formulario (cajas de texto)
            this.miFormulario.reset();
            console.log(data);
           e.preventDefault();
        })
    },
     calcularImp(data) {
         if (data.preciobase > 150000){
            //console.log(`El impuesto de ${data.preciobase} es ${data.preciobase*0.19}`); 
            this.miRes.insertAdjacentHTML("afterend",`<p> El impuesto de ${data.preciobase} es ${data.preciobase*0.19} </p>`);
        }
        else{ 
            //console.log(`El impuesto del ${data.preciobase} es ${data.preciobase*0.16}`)
            this.miRes.insertAdjacentHTML("afterend",`<p> El impuesto de ${data.preciobase} es ${data.preciobase*0.16} </p>`);
            }
        //this.miRes.insertAdjacentHTML("afterend",`<p> impuesto: ${data.preciobase} </p>`);
        console.log(data.preciobase);
    }

}