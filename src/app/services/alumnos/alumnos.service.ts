import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from './alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private url: string = "http://localhost:8080/api/v2/alumnos"

  constructor(private http: HttpClient) { }

  //Obtener estudiantes
  getAll(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(this.url);
  }

  //Crear estudiantes
  create(alumnos: Alumnos): Observable<Alumnos> {
    return this.http.post<Alumnos>(this.url, alumnos);
  }

  //Buscar estudiantes por Id
  get(id: number | any): Observable<Alumnos> {
    return this.http.get<Alumnos>(this.url + '/' + id);
  }

  //Actualizar Estudiantes
  update(alumnos: Alumnos): Observable<Alumnos> {
    return this.http.put<Alumnos>(this.url, alumnos);
  }

  //Eliminar estudiante
  delete(id: number | any): Observable<Alumnos> {
    return this.http.delete<Alumnos>(this.url + '/' + id);
  }

}
