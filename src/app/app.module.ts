import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './main/alumnos/alumnos.component';
import { ClasesAlumnoComponent } from './main/clases-alumno/clases-alumno.component';
import { ClasesComponent } from './main/clases/clases.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'clases/:id', component: ClasesComponent },
  { path: 'alumno', component: AlumnosComponent },
  { path: 'alumno/:id', component: AlumnosComponent },
  { path: 'clasesalumno', component: ClasesAlumnoComponent },
  { path: 'clasesalumno/:id', component: ClasesAlumnoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClasesComponent,
    AlumnosComponent,
    ClasesAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClasesAlumnoComponent),
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
