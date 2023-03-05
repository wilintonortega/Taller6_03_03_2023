export default{
    miFormulario:document.querySelector("#formtaller"),
    // miBoton:document.querySelector("#btn-calc2"),
    // miCaja:document.querySelector("#preciob2"),
    miRes:document.querySelector("#res2"),
    pcontar:document.querySelector("#pcontar"),
    data : [],
    cantidad:0,
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
        let promedio=(((Number.parseFloat(data.nota1)+Number.parseFloat(data.nota2)+Number.parseFloat(data.nota3)+Number.parseFloat(data.nota4)+Number.parseFloat(data.nota5))/5).toFixed(2))
    
    if(promedio<5){
        this.miRes.insertAdjacentHTML("afterbegin",`<p class="nopass">Estudiante ${data.nombre}  -  Nota promedio: ${promedio} </p>`)
       this.cantidad += 1;
        }  
        else{
            this.miRes.insertAdjacentHTML("afterbegin",`<p class="pass">Estudiante ${data.nombre}  -  Nota promedio: ${promedio} </p>`)  
        }        
        
        this.pcontar.innerHTML=(`<p>Cantidad de estudiantes por nivelar: ${this.cantidad}</p>`)
        console.log(this.cantidad)
    }

}