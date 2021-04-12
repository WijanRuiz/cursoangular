import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() {
  }
  isPlaying = true;
  imagenes: string[] = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];
  indice = 0;
  widthPrincipal = 300;
  variacion = 25;
  maxWidth = 600;
  minWidth = 150;
  timer = 2000;
  interval = setInterval(() => this.modificarIndice(1), this.timer);

  modificarWidth = (aumento: boolean) => {
    this.widthPrincipal += (aumento ? this.variacion : this.variacion * -1);
    this.widthPrincipal = this.widthPrincipal > this.maxWidth ? this.maxWidth : this.widthPrincipal;
    this.widthPrincipal = this.widthPrincipal < this.minWidth ? this.minWidth : this.widthPrincipal;
  }

  modificarIndice = (valor: number) => {
    this.indice += valor;
    // En bucle
    this.indice = this.indice < 0 ? this.imagenes.length - 1 : this.indice;
    this.indice = this.indice >= this.imagenes.length ? 0 : this.indice;
  }

  togglePlay = () => {
    if (this.isPlaying){
      this.isPlaying = false;
      clearInterval(this.interval);
    }
    else{
      this.isPlaying = true;
      this.interval = setInterval(() => this.modificarIndice(1), this.timer);
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  seleccionarImagen = (i: number) => this.indice = i;
}
