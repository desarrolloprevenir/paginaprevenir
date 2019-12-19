import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { environment } from '../../../environments/environment.prod';



@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})


export class GaleriaComponent implements OnInit {

  imagenes = [];
  tipo: string;
  public fotografias;
  public ruta;

  public url = environment.apiUrl;

  // tslint:disable-next-line: variable-name
  constructor(private _aplicationService: AppService) {
    this.tipo = 'todos';
   }

  ngOnInit() {
    this.getImagenes();
    // console.log(this.fotografias);
  }
  getImagenes() {
    this.ruta = 'http://cdn.prevenirexpress.com:3000';
    this._aplicationService.getFotos().subscribe( (response) => {
      this.fotografias = response;
      // console.log(this.fotografias);
      });
  }

}
