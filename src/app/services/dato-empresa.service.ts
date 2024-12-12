import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoEmpresaService {

  constructor() { }

  // Simulamos la obtención de los datos de la empresa
  getDatosEmpresa(): Observable<any> {
    const datosEmpresa = {
      nombre: 'Empresa Transparente',
      direccion: 'Calle Ficticia 123',
      telefono: '+1234567890',
      email: 'contacto@empresa.com',
      logo: 'assets/logo.png',  // Aquí pon la ruta del logo
    };
    return of(datosEmpresa);
  }
}
