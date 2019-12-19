import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  prevenirFundacion() {
    this.router.navigate(['/inicio']);
  }

  optica() {
    this.router.navigate(['/optica']);
  }

  fundacion() {
    this.router.navigate(['/fundacion']);
  }

  // fundacion(){
  //   this.router.navigate(['http://citas.prevenirexpress.com']);
  // }

}
