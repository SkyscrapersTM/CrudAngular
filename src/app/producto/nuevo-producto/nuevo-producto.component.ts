import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre = '';
  precio: number = null;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const producto = new Producto(this.nombre, this.precio);
    this.productoService.guarda(producto).subscribe(
      data => {
        this.toastr.success('Producto Creado!', 'Ok', {
          timeOut: 3000,
          positionClass: 'toast-center-center',
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-center-center',
        });
        this.router.navigate(['/']);
      });
  }
}
