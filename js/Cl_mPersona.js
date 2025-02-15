export default class Cl_mPersona{
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

    set sexo(s){
        this._sexo = s.toUpperCase();
    }
    get sexo(){
        return this._sexo;
    }
}