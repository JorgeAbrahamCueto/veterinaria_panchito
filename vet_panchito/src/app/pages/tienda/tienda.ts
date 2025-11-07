import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tienda.html',
  styleUrls: ['./tienda.css'],
})
export class Tienda {
  productos = [
    {
      nombre: 'Alimento Premium para Perros',
      descripcion: 'Bolsa de 10kg, rico en proteínas y sin colorantes.',
      precio: 89.9,
      imagen: '/img/comidaperro.png',
    },
    {
      nombre: 'Arena Sanitaria para Gatos',
      descripcion: 'Absorción ultra rápida, sin aroma, 5kg.',
      precio: 34.5,
      imagen: '/img/arenagatos.png',
    },
    {
      nombre: 'Shampoo Antipulgas',
      descripcion: 'Fórmula suave para piel sensible, 250ml.',
      precio: 22.0,
      imagen: '/img/shampoo.png',
    },
    {
      nombre: 'Juguete Mordedor en Forma de Hueso',
      descripcion: 'Resistente, ideal para cachorros y adultos.',
      precio: 18.9,
      imagen: '/img/juguetemordedor.png',
    },
    {
      nombre: 'Vitaminas Multiespecie',
      descripcion: 'Frasco de 60 tabletas, refuerza defensas.',
      precio: 49.0,
      imagen: '/img/multi.png',
    },
  ];

  carrito: any[] = [];

  nombreCliente: string = '';
  correoCliente: string = '';
  direccionCliente: string = '';
  tipoComprobante: string = '';
  mostrarPago: boolean = false;

  tarjeta = {
    numero: '',
    nombre: '',
    expiracion: '',
    cvv: '',
  };

  agregarAlCarrito(producto: any): void {
    this.carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  eliminarDelCarrito(index: number): void {
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  formatearTarjeta(event: any): void {
    let valor = event.target.value.replace(/\D/g, '').slice(0, 16);
    valor = valor.replace(/(.{4})/g, '$1 ').trim();
    this.tarjeta.numero = valor;
  }

  formatearExpiracion(event: any): void {
    let valor = event.target.value.replace(/\D/g, '').slice(0, 4);
    if (valor.length >= 3) {
      valor = valor.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }
    this.tarjeta.expiracion = valor;
  }

  procesarCompra(): void {
    const pedido = {
      cliente: {
        nombre: this.nombreCliente,
        correo: this.correoCliente,
        direccion: this.direccionCliente,
      },
      comprobante: this.tipoComprobante,
      tarjeta: this.tarjeta,
      productos: this.carrito,
      fecha: new Date().toISOString(),
    };

    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    this.carrito = [];
    localStorage.removeItem('carrito');
    this.nombreCliente = '';
    this.correoCliente = '';
    this.direccionCliente = '';
    this.tipoComprobante = '';
    this.tarjeta = { numero: '', nombre: '', expiracion: '', cvv: '' };
    this.mostrarPago = false;

    alert('✅ ¡Pago confirmado! Gracias por tu compra.');
  }
}
