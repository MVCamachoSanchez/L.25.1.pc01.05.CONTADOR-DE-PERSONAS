/**4. CONTADOR DE PERSONAS
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7 */

import Cl_persona from "./Cl_persona.js";
import Cl_grupo from "./Cl_grupo.js";

let persona1 = new Cl_persona("Luisa", "F");
let persona2 = new Cl_persona("Ana", "F");
let persona3 = new Cl_persona("Jose", "M");
let persona4 = new Cl_persona("Carmen", "F");
let persona5 = new Cl_persona("Rosa", "F");
let persona6 = new Cl_persona("Jose", "M");
let persona7 = new Cl_persona("Maria", "F");
let persona8 = new Cl_persona("Luz", "F");
let persona9= new Cl_persona("Rafael", "M");
let persona10 = new Cl_persona("Liz", "F");
let persona11 = new Cl_persona("Marcos", "M");
let persona12 = new Cl_persona("Leo", "M");

let grupo= new Cl_grupo();

grupo.procesarPersonas(persona1);
grupo.procesarPersonas(persona2);
grupo.procesarPersonas(persona3);
grupo.procesarPersonas(persona4);
grupo.procesarPersonas(persona5);
grupo.procesarPersonas(persona6);
grupo.procesarPersonas(persona7);
grupo.procesarPersonas(persona8);
grupo.procesarPersonas(persona9);
grupo.procesarPersonas(persona10);
grupo.procesarPersonas(persona11);
grupo.procesarPersonas(persona12);

alert(`Cantidad de personas: ${grupo.cantidadDePersonas()}
<br> Cantidad de hombre: ${grupo.cantidadDeHombres()}
<br> Cntidad de mujeres: ${grupo.cnatidadDeMujeres()}`)