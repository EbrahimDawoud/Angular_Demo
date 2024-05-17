import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../account.service';

export const canLoginGuard: CanActivateFn = (route, state) => {
  let accountService = inject(AccountService);
  if (accountService.isLoggedIn) {
    return true;
  }
   
  return false;
};
