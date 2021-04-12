import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {
  name = 'Wijan';
  constructor() {
    setTimeout(() => this.name = 'Hola', 5000);
   }

   public rename = (event: KeyboardEvent) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.name = input.value;
   }

  ngOnInit(): void {
  }

}
