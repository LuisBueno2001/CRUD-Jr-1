import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clases } from './clases';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private url: string = "http://localhost:8080/api/v2/clases"

  constructor(private http: HttpClient) { }

  //Obtener estudiantes
  getAll(): Observable<Clases[]> {
    return this.http.get<Clases[]>(this.url);
  }

  //Crear estudiantes
  create(clases: Clases): Observable<Clases> {
    return this.http.post<Clases>(this.url, clases);
  }

  //Buscar estudiantes por Id
  get(id: number | any): Observable<Clases> {
    return this.http.get<Clases>(this.url + '/' + id);
  }

  //Actualizar Estudiantes
  update(clases: Clases): Observable<Clases> {
    return this.http.put<Clases>(this.url, clases);
  }

  //Eliminar estudiante
  delete(id: number | any): Observable<Clases> {
    return this.http.delete<Clases>(this.url + '/' + id);
  }
}
