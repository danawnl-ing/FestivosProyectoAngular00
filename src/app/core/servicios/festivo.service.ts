import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from '../../../shared/entidades/festivo.js';
import { FestivoDTO } from '../../../shared/DTOs/festivo.dto.js';

@Injectable({ providedIn: 'root' })
export class FestivoService {
  private apiUrl = 'http://localhost:3000/festivos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(this.apiUrl);
  }

  create(dto: FestivoDTO): Observable<Festivo> {
    return this.http.post<Festivo>(this.apiUrl, dto);
  }

  update(id: number, dto: FestivoDTO): Observable<Festivo> {
    return this.http.put<Festivo>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  verificar(anio: number, mes: number, dia: number): Observable<boolean> {
    const params = new HttpParams()
      .set('anio', anio)
      .set('mes', mes)
      .set('dia', dia);
    return this.http.get<boolean>(`${this.apiUrl}/verificar`, { params });
  }

  listar(paisId: number, anio: number): Observable<Festivo[]> {
    const params = new HttpParams()
      .set('paisId', paisId)
      .set('anio', anio);
    return this.http.get<Festivo[]>(`${this.apiUrl}/listar`, { params });
  }
}
