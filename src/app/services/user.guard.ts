import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate {

    constructor( private router: Router) {

    }

    canActivate() {
        let confirmar = JSON.parse(localStorage.getItem('constante'));
        console.log(confirmar);
        if (confirmar && confirmar === true) {
            // console.log('aquiiii9i');
            // this.router.navigate(['/subirImagen']);
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
 }

