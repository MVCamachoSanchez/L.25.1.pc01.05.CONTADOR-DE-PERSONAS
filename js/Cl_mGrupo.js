export default class Cl_mGrupo{
    constructor(){
        this.cntMujeres = 0;
        this.cntHombre = 0;
    }

    procesarPersonas(person){

        //Contar las mujeres
        if(person.sexo == "F")
            this.cntMujeres++;

        //Contar los nombres
        if(person.sexo == "M")
            this.cntHombre++;
    }

    cantidadDePersonas(){
        return this.cntHombre + this.cntMujeres;
    }

    cnatidadDeMujeres(){
        return this.cntMujeres;
    }

    cantidadDeHombres(){
        return this.cntHombre;
    }
}