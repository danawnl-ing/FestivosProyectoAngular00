import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../../shared/entidades/pais';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaisService {
  private apiUrl = 'http://localhost:3000/paises';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }

  getById(id: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.apiUrl}/${id}`);
  }
}
