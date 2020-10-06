import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {
  // Se recibe desde el padre. Ahora se puede utilizar en este componente
  // Cualquier cambio en esta variable en 'app-goku', se reflejará acá
  @Input() kamehamehaGohan: string;

  constructor() { }

  ngOnInit(): void {
  }

}
