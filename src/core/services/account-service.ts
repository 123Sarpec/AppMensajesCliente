import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../Types/usuario';
import { tap } from 'rxjs';
// import { inject, signal,  } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  usuarioActual = signal<Usuario | null>(null);

  baseUrl = 'https://localhost:5103/api/';

  login (credenciales: any) {
    return this.http.post<Usuario>(this.baseUrl + 'CrearCuenta/login', credenciales).pipe(
      tap( usuario => {
        if (usuario) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.usuarioActual.set(usuario);
          console.log(usuario);
        }
      })

    )
  }
  logout () {
    localStorage.removeItem('usuario');
    this.usuarioActual.set(null);
  }
}
