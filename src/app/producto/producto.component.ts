import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:Producto[]=[
    {id:1,nompro:"Gaseosa",precio:10.5,cantidad:8},
    {id:2,nompro:"Atún",precio:12.9, cantidad:6},
    {id:3,nompro:"Arroz",precio:5.5, cantidad:10},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
