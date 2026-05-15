import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  /*INYECTACTMOS EL ARCHIVO DE ACCOUNT */ 
  protected accountService = inject(AccountService);
  protected credenciales: any = {}
  /*mostratmos el inicio de sesion con exito*/
  // protected loggeIn = signal(false);

    login () {
      this.accountService.login(this.credenciales).subscribe({
        next: result => {
          console.log(result);
          // this.loggeIn.set(true);
          this.credenciales = {};
        },
        error: error => console.log(error)
      });
    }
    logout () {
      // this.loggeIn.set(false);
      this.accountService.logout();
    }
}

