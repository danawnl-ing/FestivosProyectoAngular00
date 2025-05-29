import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  anio!: number;
  mes!: number;
  dia!: number;
  esFestivo: boolean | null = null;

  festivos = [
    { fecha: '2025-01-01', nombre: 'Año Nuevo' },
    { fecha: '2025-07-20', nombre: 'Independencia' }
    // Puedes agregar más datos reales o traerlos de un servicio
  ];

  tipos = [
    { nombre: 'Religioso' },
    { nombre: 'Cívico' }
    // Puedes extender según tu modelo
  ];

  ngOnInit(): void {
    // Carga inicial si fuera necesario
  }

  verificarFecha(): void {
    const fechaStr = `${this.anio}-${this.mes.toString().padStart(2, '0')}-${this.dia.toString().padStart(2, '0')}`;
    this.esFestivo = this.festivos.some(f => f.fecha === fechaStr);
  }
}
