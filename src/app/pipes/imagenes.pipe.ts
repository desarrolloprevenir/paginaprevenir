import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {
imagenes = [];
  transform(value: any, tipo: string): any {
    this.imagenes = [];
    // console.log('tipos');
    // console.log(tipo);
    if (tipo === 'todos') {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
      console.log(value[i].value);
      if (value[i].value !== 'obituarios') {
        console.log(value[i].value);
        this.imagenes.push({
          ruta : value[i].ruta,
          tipo : value[i].value
        });
      }

    }
     // console.log(this.imagenes);
      return this.imagenes;
}   else if (tipo === 'eventos') {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        console.log(value[i].value);
        if (value[i].value === 'eventos') {
          console.log(value[i].value);
          this.imagenes.push({
            ruta : value[i].ruta,
            tipo : value[i].value
          });
        }
      }
      return this.imagenes;
    } else if (tipo === 'serviciosF') {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        console.log(value[i].value);
        if (value[i].value === 'serviciosF') {
          console.log(value[i].value);
          this.imagenes.push({
            ruta : value[i].ruta,
            tipo : value[i].value
          });
        }
      }
      return this.imagenes;
    } else if (tipo === 'informacion') {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        console.log(value[i].value);
        if (value[i].value === 'informacion') {
          console.log(value[i].value);
          this.imagenes.push({
            ruta : value[i].ruta,
            tipo : value[i].value
          });
        }
      }
      return this.imagenes;
    } else if (tipo === 'obituarios') {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        console.log(value[i].value);
        if (value[i].value === 'obituarios') {
          console.log(value[i].value);
          this.imagenes.push({
            ruta : value[i].ruta,
            tipo : value[i].value
          });
        }
      }
      return this.imagenes;
    }



// if(tipo === "serviciosF"){
//   for(let i = 0; i<value.length; i++){
//     console.log(value[i].tipo);
//     if(value[i].tipo === "serviciosF"){
//       this.imagenes.push({
//         ruta : value[i].ruta,
//         tipo : value[i].tipo
//       })
//     }

//   }
//   return this.imagenes;
// }

    // return value;
  }

}
