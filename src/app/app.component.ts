import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlumnosService } from './services/alumnos/alumnos.service';
import { ClasesService } from './services/clases/clases.service';
import { ClasesalumnosService } from './services/clasesalumnos/clasesalumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}