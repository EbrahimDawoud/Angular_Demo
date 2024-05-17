import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../account.service';

export const canLoginGuard: CanActivateFn = (route, state) => {
  let accountService = inject(AccountService);
  if (accountService.isLoggedIn) {
    return true;
  }
  
  inject(Router).navigate(['/denied']);

  return false;
};
