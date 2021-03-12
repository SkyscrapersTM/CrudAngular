import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos():void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      error =>{
        console.log(error);
      }
      
    );
  }

  borrar(id: number):void{
    alert(`Borrar el espacio ${id}`);
  }

}
