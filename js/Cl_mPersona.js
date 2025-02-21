export default class Cl_mPersona{
    constructor({nombre, sexo}){
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set sexo(sexo){
        this._sexo = sexo.toUpperCase();
    }
    get sexo(){
        return this._sexo
    }
}