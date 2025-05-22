import { Tipo } from './tipo';
import { Pais } from './pais';

export interface Festivo {
  id: number;
  fecha: string;
  descripcion: string;
  tipo: Tipo;
  pais: Pais;
}
