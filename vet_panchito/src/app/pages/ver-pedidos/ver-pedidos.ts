import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ver-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ver-pedidos.html',
  styleUrls: ['./ver-pedidos.css']
})
export class VerPedidos {
  pedidos: any[] = [];

  ngOnInit(): void {
    this.pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
  }

  eliminarPedido(index: number): void {
    this.pedidos.splice(index, 1);
    localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
  }
}