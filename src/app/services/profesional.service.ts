import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  constructor() { }

  // Simulamos la obtención de los profesionales
  getProfesionales(): Observable<any[]> {
    const profesionales = [
      { nombre: 'Juan Pérez', especialidad: 'Desarrollador Frontend', foto: 'assets/juan.jpg' },
      { nombre: 'Ana López', especialidad: 'Diseñadora UX/UI', foto: 'assets/ana.jpg' },
      { nombre: 'Carlos García', especialidad: 'Backend Developer', foto: 'assets/carlos.jpg' },
      { nombre: 'Laura Díaz', especialidad: 'Scrum Master', foto: 'assets/laura.jpg' },
      { nombre: 'Javier Ruiz', especialidad: 'Desarrollador Fullstack', foto: 'assets/javier.jpg' },
      { nombre: 'Maria Fernández', especialidad: 'QA Engineer', foto: 'assets/maria.jpg' },
    ];
    return of(profesionales);
  }
}
