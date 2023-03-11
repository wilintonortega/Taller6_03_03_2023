export default{
    miFormulario:document.querySelector("#formtaller"),
    miRes:document.querySelector("#res2"),
    data : {
        Traditional: {
            0: [90, 100],
            1: [80, 89],
            2: [70, 79],
            3: [60, 69],
            4: [59, 1],
            5: [0, 0],
        },        
        Point_Range: {
            0: [12, 14],
            1: [9, 11],
            2: [6, 8],
            3: [3, 5],
            4: [1, 2],
            5: [0, 0],
        },
        Letter: {
            0: ['A'],
            1: ['B'],
            2: ['C'],
            3: ['D'],
            4: ['E'],
            5: ['F'],
        },
        SBG_Rating: {
            0: [4],
            1: [3],
            2: [2],
            3: [1],
            4: [0],
            5: [0],
        },
        Proficiency_level_witch_standard: {
            0: ['Exceeds proficiency'],
            1: ['Demonstrates proficiency'],
            2: ['Approaches proficiency'],
            3: ['Falls well below proficiency'],
            4: ['Lacks all proficiency'],
            5: ['No attempt made'],
        },
    },
    stopEnvio(){
        this.miFormulario.addEventListener("submit", (e)=>{
            //Obtener los datos del formulario y tranformarlo en un objeto nativo de javaScript
            // this.data.push(Object.fromEntries(new FormData(e.target)));
            //Detener el envio de datos por la url del lugar donde se encuentra el formulario
            let data=Object.fromEntries(new FormData(e.target));
            //llamo a funcion creada
            this.standard(data)
            this.miFormulario.reset();
           e.preventDefault();
        })
    },
    standard(data) {

        
         if(data.letra.toUpperCase() == "A"){
        this.miRes.insertAdjacentHTML("afterbegin",(`${this.data.Traditional[0]} -  ${this.data.Point_Range[0]} - ${this.data.SBG_Rating[0]} - ${this.data.Proficiency_level_witch_standard[0]}<br/>`))
        }
        else if (data.letra.toUpperCase() == "B"){
        this.miRes.insertAdjacentHTML("afterbegin",(`${this.data.Traditional[1]} -  ${this.data.Point_Range[1]} - ${this.data.SBG_Rating[1]} - ${this.data.Proficiency_level_witch_standard[1]}<br/>`))
        }
        else if (data.letra.toUpperCase() == "C"){
        this.miRes.insertAdjacentHTML("afterbegin",(`${this.data.Traditional[2]} -  ${this.data.Point_Range[2]} - ${this.data.SBG_Rating[2]} - ${this.data.Proficiency_level_witch_standard[2]}<br/>`))
        } 
        else if (data.letra.toUpperCase() == "D"){
        this.miRes.insertAdjacentHTML("afterbegin",(`${this.data.Traditional[3]} -  ${this.data.Point_Range[3]} - ${this.data.SBG_Rating[3]} - ${this.data.Proficiency_level_witch_standard[3]}<br/>`))
        }
        else if (data.letra.toUpperCase() == "E"){
        this.miRes.insertAdjacentHTML("afterbegin",(`${this.data.Traditional[4]} -  ${this.data.Point_Range[4]} - ${this.data.SBG_Rating[4]} - ${this.data.Proficiency_level_witch_standard[4]}<br/>`))
        }
        else if (data.letra.toUpperCase() == "F"){
        this.miRes.insertAdjacentHTML("afterbegin",(`${this.data.Traditional[5]} -  ${this.data.Point_Range[5]} - ${this.data.SBG_Rating[5]} - ${this.data.Proficiency_level_witch_standard[5]}<br/>`))
        }else{
            this.miRes.insertAdjacentHTML("afterbegin",`La letra ingresada no corresponde a una nota<br/>`)
        }
    }
}