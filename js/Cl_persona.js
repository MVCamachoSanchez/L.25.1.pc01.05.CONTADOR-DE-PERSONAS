export default class Cl_persona{
    constructor(nombre, sexo){
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

    set sexo(sexo){
        this._sexo = sexo;
    }
    get sexo(){
        return this._sexo;
    }
}