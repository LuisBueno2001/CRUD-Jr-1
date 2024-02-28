import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasesalumnos } from './clasesalumnos';

@Injectable({
  providedIn: 'root'
})
export class ClasesalumnosService {

  private url: string = "http://localhost:8080/api/v2/clasesalumno"

  constructor(private http: HttpClient) { }
  //Obtener estudiantes
  getAll(): Observable<Clasesalumnos[]> {
    return this.http.get<Clasesalumnos[]>(this.url);
  }

  //Crear estudiantes
  create(clasesalumno: Clasesalumnos): Observable<Clasesalumnos> {
    return this.http.post<Clasesalumnos>(this.url, clasesalumno);
  }

  //Buscar estudiantes por Id
  get(id: number | any): Observable<Clasesalumnos> {
    return this.http.get<Clasesalumnos>(this.url + '/' + id);
  }

  //Actualizar Estudiantes
  update(claseAlumno: Clasesalumnos): Observable<Clasesalumnos> {
    return this.http.put<Clasesalumnos>(this.url, claseAlumno);
  }

  //Eliminar estudiante
  delete(id: number | any): Observable<Clasesalumnos> {
    return this.http.delete<Clasesalumnos>(this.url + '/' + id);
  }
}
