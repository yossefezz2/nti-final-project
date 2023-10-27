import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const indexGuard: CanActivateFn = (route, state) => {
  const router= inject(Router)
  let userType =localStorage.getItem('userType')
  if (userType == 'user') {
    router.navigateByUrl("/user")
    return false
  }else if (userType == 'admin'){
    router.navigateByUrl("/admin")
    return false
  }
  else{
    router.navigateByUrl("/login")
    return false
  }
};
