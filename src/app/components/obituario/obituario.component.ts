import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-obituario',
  templateUrl: './obituario.component.html',
  styleUrls: ['./obituario.component.css']
})
export class ObituarioComponent implements OnInit {

  imagenes = [];
  tipo: string;
  public fotografias;

  public url = environment.apiUrl;

  // tslint:disable-next-line: variable-name
  constructor(private _aplicationService: AppService) {
    this.tipo = 'obituarios';
   }

  ngOnInit() {
    this.getImagenes();
    console.log(this.fotografias);
  }

  getImagenes() {

    const ruta = 'http://cdn.prevenirexpress.com:3000';
    this._aplicationService.getFotos().subscribe( (response) => {
      this.fotografias = response;
     });
  }

}
