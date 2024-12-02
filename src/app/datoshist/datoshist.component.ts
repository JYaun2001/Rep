import {Component, NgModule, OnInit} from '@angular/core';
import {ApiService} from '../ApiService';
import {DatosHistoricos} from '../interfaces';

@Component({
  selector: 'app-datoshist',
  templateUrl: './datoshist.component.html',
  styleUrl: './datoshist.component.scss'
})
export class DatoshistComponent implements OnInit {

  lista: DatosHistoricos[] = [];


  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.obtenerDatos().subscribe({
      next: data => {
        console.log('Datos recibidos:', data);
        this.lista = data.lista;
      },
      error: error => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }
}

