import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userActiveGuard: CanActivateFn = (route, state) => {
  const router= inject(Router)
  let userType =localStorage.getItem('userType')
  if (userType!='user') {
    router.navigateByUrl("/login")
    return false
  }
  return true;
};
