import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {
  termino: string = ''
  tieneError: boolean = false
  paises: Country[] = []
  paisesSugeridos: Country[] = []
  mostrarSugerencias:boolean = false
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino: string) {
    this.tieneError = false
    this.termino = termino
    this.paisService.buscarPais(this.termino).subscribe(
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
    this.termino = termino
    this.mostrarSugerencias = true

    // TODO: crear sugerecias
    this.paisService.buscarPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = []
    )
  }

  buscarSugerido(termino: string) {
    this.buscar(termino)
  }
}
