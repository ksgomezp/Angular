import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  buscar(item: string){
    this.gifsService.buscarGifs(item);
  }

  constructor(private gifsService: GifsService) { }

  

}
