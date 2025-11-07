import { Component } from '@angular/core'; /* Importa el decorador Component de Angular */
import { RouterModule } from '@angular/router'; /* Importa el módulo de enrutamiento de Angular */

@Component({ /* Define el componente HeaderComponent */
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}