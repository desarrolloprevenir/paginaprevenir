import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {

  public tipos;
  public datosImagen: FormGroup;
  public datos;

  public estado;
  public statusText;

  public imagenSeleccionada;

  public txtImg = [];

  base64textString = [];
  selectedFile: File = null;

  // tslint:disable-next-line: variable-name
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private _aplicationService: AppService) {
    this.datosImagen =  this.formBuilder.group({
      txtTipos : ['', [Validators.required]],
      txtImg : ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.tipoImagen();
  }

  tipoImagen()  {
    this.tipos = [{ id : '0' , nombre : 'todos'},
                { id : '1' , nombre : 'informacion'},
                { id : '2' , nombre : 'serviciosF'},
                { id : '3' , nombre : 'eventos'},
                { id : '4' , nombre : 'optica'},
                { id : '5' , nombre : 'obituarios'}];
  }


  onUploadChange(evt: any) {
    for (let i = 0; i <= 10; i++) {

      const file = evt.target.files[i];

      if (file) {
        const reader = new FileReader();
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/jpeg;base64,' + btoa(e.target.result));
  }

  onSubmit() {
    const categ = this.datosImagen.value.txtTipos;
    const imagen = this.base64textString;
    const fotos = [];

    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < imagen.length; j++) {
      fotos.push({dominio: 'funeraria', categ, foto: imagen[j]});
    }
    console.log(fotos);
    this._aplicationService.postFotos(fotos).subscribe((response) => {
       // console.log(response);
        const respuesta = response[0];
        if (respuesta.agregada === true) {
           this.estado = 'success';
           this.statusText = 'Fotografias subidas exitosamentes';
           this.datosImagen.reset();
           this.base64textString = [];
         }
      }, (err) => {
        console.log(err);
        this.estado = 'error';
        this.statusText = 'Ha ocurrido un error subiendo foto, por favor revisa tu conexión o intentalo más tarde.';
        return false;
      });
  }

  // removeSelectedFile(index){
  //   // this.imagenSeleccionada.splice(index,1);
  //   console.log(index);
  // }

}
