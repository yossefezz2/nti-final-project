import { CanDeactivateFn } from '@angular/router';

export const authDeactiveGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  console.log(component);
  
  if(component?.addForm?.dirty && component.isSubmitted ==false){
    const cn =confirm('Are you sure you want to leave this site before saved?')
    if(cn){
      return true
    }
    else return false
  }
  return true
};
