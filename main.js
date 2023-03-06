export default{
    miFormulario:document.querySelector("#formtaller"),
    miRes:document.querySelector("#res2"),
    data : [],
    stopEnvio(){
        this.miFormulario.addEventListener("submit", (e)=>{
            //Obtener los datos del formulario y tranformarlo en un objeto nativo de javaScript
            // this.data.push(Object.fromEntries(new FormData(e.target)));
            //Detener el envio de datos por la url del lugar donde se encuentra el formulario
            let data=Object.fromEntries(new FormData(e.target));
            //llamo a funcion creada
            this.caracter(data)
            //limpiar valores formulario (cajas de texto)
            this.miFormulario.reset();
            console.table(data);
           e.preventDefault();
        })
    },
    caracter(data) {

        console.log(`${typeof(data.letra)} --${data.letra}  ` ); 
        console.log(/[0-9]/g.test(data.letra));

        //uso regular expresions
        if(/[0-9]/g.test(data.letra)){
            this.miRes.insertAdjacentHTML("afterbegin",`<p>La letra  ${data.letra} es un numero </p>`)
        }else if(/[a-z]/g.test(data.letra)){
            this.miRes.insertAdjacentHTML("afterbegin",`<p>La letra  ${data.letra} es una minuscula </p>`)
        }else if(/[A-Z]/g.test(data.letra)){
            this.miRes.insertAdjacentHTML("afterbegin",`<p>La letra  ${data.letra} es una mayuscula </p>`)
        }else{
            this.miRes.insertAdjacentHTML("afterbegin",`<p>La letra  ${data.letra} no es un caracter alfanumerico</p>`)  
        }  
    }
}