import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {
  debouncer: Subject<string> = new Subject()
  termino: string = ''
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()
  @Input() placeholder:string =''
  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor)
      })
  }
  buscar() {
    this.onEnter.emit(this.termino)

  }
  tecleaPresionada() {
    this.debouncer.next(this.termino)
  }

}
