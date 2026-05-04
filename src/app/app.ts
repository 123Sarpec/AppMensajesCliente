import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
// import { inject, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
    private http = inject(HttpClient);
  // protected readonly title = signal('AppMensajeCliente');
  protected title = 'Api de mensajes';
  // protected Miembros: any;
  protected Miembros = signal<any>([])

 async  ngOnInit() {
    // this.http.get('http://localhost:5103/api/Miembros').subscribe({
    //   next: response => this.Miembros.set(response),
    this.Miembros.set(await this.getMiembros());
    //   error: err => console.log(err),
    //   complete: () => console.log('complete')
    // });
  }
  async getMiembros() {
    try {
      return lastValueFrom(this.http.get('http://localhost:5103/api/Miembros'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // constructor( private http: HttpClient) {
  //   // this.title.set('Api de mensajes');
  // }
}
