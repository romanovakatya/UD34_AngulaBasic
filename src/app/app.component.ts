import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'administracion-articulos';
  header = 'Administración de artículos';

  index = -1;
  codigo: any;
  description = '';
  precio: any;

  articulos = [
    {codigo: 1, description: 'papas', precio: 10.55},
    {codigo: 2, description: 'manzanas', precio: 12.1},
    {codigo: 3, description: 'melon', precio: 52.3},
    {codigo: 4, description: 'cebollas', precio: 17},
    {codigo: 5, description: 'calabaza', precio: 20},
  ];

//para borrar un elemento de array,
  borrar(codigo: number){
    this.articulos.splice((codigo), 1);
  }

  //para añadir un elemento al array,
  agregar(){
    this.articulos.push({codigo: this.codigo, description: this.description,
      precio: this.precio});
  }

  //para seleccionar un elemento,
  seleccionar(index: number){
    this.codigo = this.articulos[index].codigo;
    this.description = this.articulos[index].description;
    this.precio = this.articulos[index].precio;
    this.index = index;
  }

  //para modificar un elemento de array,
  modificar(index: number){
    this.articulos[index].codigo = this.codigo;
    this.articulos[index].description = this.description;
    this.articulos[index].precio = this.precio;
  }

  //para limpiar los inputs,
  clear(){
    this.codigo = null;
    this.description = '';
    this.precio = null;
  }
}
