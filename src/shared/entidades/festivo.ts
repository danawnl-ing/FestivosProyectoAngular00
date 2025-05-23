import { Tipo } from './tipo';
import { Pais } from './pais';

export interface Festivo {
    id: number;
    idPais: number;
    nombre: string;
    Dia: number;
    Mes: number;
    DiaPascua: number;
    idTipo: number;
}
