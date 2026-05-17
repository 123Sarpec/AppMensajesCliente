import { Component, input, output } from '@angular/core';
import { LoginRegistrar, Usuario } from '../../../Types/usuario';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registrar',
  imports: [FormsModule],
  templateUrl: './registrar.html',
  styleUrl: './registrar.css',
})
export class Registrar {
  MiembrosFormsHome = input.required<Usuario[]>();
  cancelarRegistro = output<boolean>();  
  protected credenciales = { } as LoginRegistrar;

  registrar() {
    console.log(this.credenciales);
  }

  cancelar() {
    this.cancelarRegistro.emit(false);
    console.log('cancelado.......');
  }
}
