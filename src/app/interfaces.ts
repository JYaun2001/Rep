export interface DatosHistoricos {
  id: number;
  estacion_id: number;
  servicio_id: number;
  cantidad_personas: number;
  fecha_registro: Date;
}

export interface RespDatos {
  lista: DatosHistoricos[];
}
