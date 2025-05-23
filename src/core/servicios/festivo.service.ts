import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from '../../shared/entidades/festivo.js';
import { Tipo } from '../../shared/entidades/tipo.js';
import { Pais } from '../../shared/entidades/pais.js';
import { FestivoDTO } from '../../shared/DTOs/festivo.dto.js';

@Injectable({ providedIn: 'root' })
export class FestivoService {
  private apiUrl = 'http://localhost:3000/festivos';

  constructor(private http: HttpClient) {}


  //Listar todos los festivos
  obtenerTodos(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(this.apiUrl);
  }

  //Buscar festivos por nombre
    buscar(nombre: string): Observable<Festivo[]> {
      const params = new HttpParams().set('nombre', nombre);
      return this.http.get<Festivo[]>(`${this.apiUrl}/buscar`, { params });
    }

  //Agregar un nuevo festivo
  agregar(festivo: Festivo): Observable<Festivo> {
    return this.http.post<Festivo>(this.apiUrl, festivo);
  }

  //Modificar un festivo existente
  modificar(festivo: Festivo): Observable<Festivo> {
    return this.http.put<Festivo>(`${this.apiUrl}/${festivo.id}`, festivo);
  }

  //liminar un festivo por su ID
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  //Verificar (año, mes, día)
  verificar(idPais: number,año: number, mes: number, dia: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/verificar/${idPais}/${año}/${mes}/${dia}`);
  }

  //Listar (por país y año)
  listar(idPais: number, anio: number): Observable<FestivoDTO[]> {
    return this.http.get<FestivoDTO[]>(`${this.apiUrl}/listar/${idPais}/${anio}`);
  }

  

}
