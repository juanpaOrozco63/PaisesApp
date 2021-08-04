import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = ''
  paises:Country[] = []
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  activarRegion(region: string) {
    if(region=== this.regionActiva){
      return
    }
    this.regionActiva = region
    this.paises = []
    this.paisService.buscarRegion(region).subscribe(paises=>this.paises=paises)
  }
  getClaseCSS(region:string){

    return (region === this.regionActiva)?'btn btn-primary mx-1':'btn btn-outline-primary mx-1'
  }
 
}
