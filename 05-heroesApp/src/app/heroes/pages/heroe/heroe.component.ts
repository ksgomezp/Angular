import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width: 100%;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private rutaActiva: ActivatedRoute, private heroeService: HeroesService) { }


  ngOnInit(): void {
    this.rutaActiva.params
    .pipe(
        switchMap(({id}) => this.heroeService.getHeoreId(id))
    ).subscribe(heroe => this.heroe = heroe)
    }
  }

