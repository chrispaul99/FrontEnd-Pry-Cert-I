import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-vertical',
  templateUrl: './grafica-vertical.component.html',
  styleUrls: ['./grafica-vertical.component.css']
})
export class GraficaVerticalComponent implements OnInit {

  @Input() single:any[]=[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  title = "Productos";
  showXAxisLabel = true;
  xAxisLabel = 'Productos';
  showYAxisLabel = true;
  yAxisLabel = 'Veces';
  intervalo;

  colorScheme = 'cool';
  constructor() { }

  ngOnInit(): void {
  }

}
