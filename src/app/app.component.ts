import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlumnosService } from './services/alumnos/alumnos.service';
import { ClasesService } from './services/clases/clases.service';
import { ClasesalumnosService } from './services/clasesalumnos/clasesalumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/main']);
  }
  
}