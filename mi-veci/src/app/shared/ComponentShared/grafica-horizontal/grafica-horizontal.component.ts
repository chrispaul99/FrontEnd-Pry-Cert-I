import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-horizontal',
  templateUrl: './grafica-horizontal.component.html',
  styleUrls: ['./grafica-horizontal.component.css']
})
export class GraficaHorizontalComponent implements OnInit {
  @Input() single:any[]=[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  title = "Productos";
  showXAxisLabel = true;
  xAxisLabel = 'Cantidad';
  showYAxisLabel = true;
  yAxisLabel = 'Productos';
  intervalo;

  colorScheme = 'cool';
  constructor() { }

  ngOnInit(): void {
  }

}
