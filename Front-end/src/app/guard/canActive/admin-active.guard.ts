import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminActiveGuard: CanActivateFn = (route, state) => {
  const router= inject(Router)
  let userType =localStorage.getItem('userType')
  if (userType!='admin') {
    router.navigateByUrl("/login")
    return false
  }
  return true;

};
