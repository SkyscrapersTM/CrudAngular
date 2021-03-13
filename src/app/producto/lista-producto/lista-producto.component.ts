import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService
    ) { }

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
    this.productoService.eimina(id).subscribe(data => {
      this.toastr.success('Producto Eliminado!', 'Ok', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
      this.cargarProductos();
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
    });
  }

}
