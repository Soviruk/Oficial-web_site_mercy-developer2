import { Component, OnInit } from '@angular/core';
import { DatoEmpresaService } from '../../services/dato-empresa.service';
import { ProfesionalService } from '../../services/profesional.service';

@Component({
  selector: 'app-datos-empresa',
  templateUrl: './datos-empresa.component.html',
  styleUrls: ['./datos-empresa.component.css']
})
export class DatosEmpresaComponent implements OnInit {
  datosEmpresa: any;
  profesionales: any[] = [];

  constructor(
    private datoEmpresaService: DatoEmpresaService,
    private profesionalService: ProfesionalService
  ) {}

  ngOnInit(): void {
    this.datoEmpresaService.getDatosEmpresa().subscribe((data) => {
      this.datosEmpresa = data;
    });

    this.profesionalService.getProfesionales().subscribe((data) => {
      this.profesionales = data;
    });
  }
}
