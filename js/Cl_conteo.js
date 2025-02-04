export default class Cl_conteo{
    constructor(){
        this.cntPersonas = 0;
        this.cntMujeres = 0;
        this.cntHombre = 0;
    }

    procesarPersonas(person){
        //Contas las personas
        this.cntPersonas++;

        //Contar las mujeres
        if(person.sexo == "F")
            this.cntMujeres++;

        //Contar los nombres
        if(person.sexo == "M")
            this.cntHombre++;
    }

    cantidadDePersonas(){
        return this.cntPersonas;
    }

    cnatidadDeMujeres(){
        return this.cntMujeres;
    }

    cantidadDeHombres(){
        return this.cntHombre;
    }
}