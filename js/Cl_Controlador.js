export default class Cl_Controlador{
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarPersona(){
        this.modelo.procesarPersona(this.vista.procesarPersona());
        this.vista.reportarPersona(
            this.modelo.cantidadPersonas(),
            this.modelo.cantidadHombres(),
            this.modelo.cantidadMujeres()
        );
    }
}