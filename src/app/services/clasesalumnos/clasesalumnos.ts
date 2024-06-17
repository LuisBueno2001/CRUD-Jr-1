import { Alumnos } from "../alumnos/alumnos";
import { Clases } from "../clases/clases";

export class Clasesalumnos {
    id: number|any;
    alumno_id: Alumnos | undefined;
    clase_id: Clases | undefined;
}