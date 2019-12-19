import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';
import { FormControl } from '@angular/forms';

const constante = {usuario: "admin", pass:"Prevenir2019"};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username= new FormControl('');
  password = new FormControl('');

  validacion;

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  login(){
    console.log(constante.usuario,constante.pass);
    if((this.username.value === constante.usuario)&& (this.password.value === constante.pass)){
      this.validacion = 'bien';
      localStorage.setItem('constante',JSON.stringify(true));
      this.router.navigate(['/subirImagen']);

    }else{
      console.log("incorrecto");
      this.validacion = 'mal';
    }
  }

 

  

}
