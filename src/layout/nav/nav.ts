import { Component, inject } from '@angular/core';
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
  private accountService = inject(AccountService);
  protected credenciales: any = {}
    login () {
      console.log(this.credenciales);
      this.accountService.login(this.credenciales).subscribe({
        next: result => console.log(result),
        error: error => console.log(error)
        // complete: () => console.log('complete')
      });
    }
}

