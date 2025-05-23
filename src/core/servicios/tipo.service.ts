import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo } from '../../shared/entidades/tipo';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TipoService {
  private apiUrl = 'http://localhost:3000/tipos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.apiUrl);
  }

  create(tipo: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(this.apiUrl, tipo);
  }

  update(tipo: Tipo): Observable<Tipo> {
    return this.http.put<Tipo>(`${this.apiUrl}/${tipo.id}`, tipo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
