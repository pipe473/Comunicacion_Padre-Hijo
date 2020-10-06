import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.css']
})
export class GokuComponent implements OnInit {
   // Se declara e inicia en el componente padre para luego comunicarlo al componente hijo
   kamehamehaGoku: string = '';

   keyUp(letra: string) {
    this.kamehamehaGoku = letra;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
