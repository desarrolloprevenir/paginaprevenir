import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public datosUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.datosUsuario = this.formBuilder.group({
      txtNombre : ['', [Validators.required,Validators.pattern('[a-z A-z ñ]*')]],
      txtCedula : ['', [Validators.required,Validators.pattern('[a-z A-z ñ]*')]],
      txtCorreo : ['', [Validators.required,Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]],
      txtTelefono : ['', [Validators.required,Validators.pattern('[0-9]*')]],
      txtAsunto : ['', [Validators.required]],
      txtMensaje : ['', [Validators.required]]
    })

  }

  ngOnInit() {
    

  }


prueba(){
  console.log(this.datosUsuario.value.txtNombre);
  console.log(this.datosUsuario.value.txtCedula);
}
  
}
