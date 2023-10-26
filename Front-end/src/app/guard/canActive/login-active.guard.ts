import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginActiveGuard: CanActivateFn = (route, state) => {
  const router= inject(Router)
  let token =localStorage.getItem('token')
  let userType =localStorage.getItem('userType')
  if (token && userType=='admin') {
    router.navigateByUrl("/admin")
    return false
  }
  else if (token && userType=='user') {
    router.navigateByUrl("/user")
    return false
  }
  return true;
};
