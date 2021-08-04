import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {
  termino: string = ''
  tieneError: boolean = false
  paises: Country[] = []

  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino: string) {
    this.tieneError = false
    this.termino = termino
    this.paisService.buscarCapital(this.termino).subscribe(
      paises => {
        this.paises = paises
        console.log(paises);


      }, (err) => {
        this.tieneError = true
        this.paises = []
      })
  }
  sugerencias(termino: string) {
    this.tieneError = false
    // TODO: crear sugerecias
  }
}
