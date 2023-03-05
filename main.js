export default{
    miFormulario:document.querySelector("#formtaller"),
    miBoton:document.querySelector("#btn-calc2"),
    miCaja:document.querySelector("#preciob2"),
    miRes:document.querySelector("#res2"),
    Sanual:14400000,
    data:[],
    stopEnvio(){
        this.miFormulario.addEventListener("submit", (e)=>{
            //Obtener los datos del formulario y tranformarlo en un objeto nativo de javaScript
            // this.data.push(Object.fromEntries(new FormData(e.target)));
            //Detener el envio de datos por la url del lugar donde se encuentra el formulario
            let data=Object.fromEntries(new FormData(e.target));
            //llamo a funcion creada
            this.calcularSueldo(data)
            //limpiar valores formulario (cajas de texto)
            this.miFormulario.reset();
            console.log(data);
           e.preventDefault();
        })
    },
    calcularSueldo(data) {
         if (data.cantidadYear >= 10){
            this.miRes.insertAdjacentHTML("afterend",`<p> La cantidad de años es ${data.cantidadYear} y su aumento es de 10% es decir: Salario Mensual -> ${((this.Sanual/12)*1.1).toFixed(0)} y un Salario Anual de ${((this.Sanual)*1.1).toFixed(0)} </p>`);
        }
        else if(data.cantidadYear > 5){ 
           
            this.miRes.insertAdjacentHTML("afterend",`<p> La cantidad de años es ${data.cantidadYear} y su aumento es de 7% es decir: Salario Mensual -> ${((this.Sanual/12)*1.07).toFixed(0)} y un Salario Anual de ${((this.Sanual)*1.07).toFixed(0)} </p>`);
            }
        else if(data.cantidadYear >= 3 ){ 
           
            this.miRes.insertAdjacentHTML("afterend",`<p> La cantidad de años es ${data.cantidadYear} y su aumento es de 5% es decir: Salario Mensual -> ${((this.Sanual/12)*1.05).toFixed(0)} y un Salario Anual de ${((this.Sanual)*1.05).toFixed(0)} </p>`);
            }
        else {
            this.miRes.insertAdjacentHTML("afterend",`<p> La cantidad de años es ${data.cantidadYear} y su aumento es de 3% es decir: Salario Mensual -> ${((this.Sanual/12)*1.03).toFixed(0)} y un Salario Anual de ${((this.Sanual)*1.03).toFixed(0)}</p>`);
        }


    }

}