import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminActiveGuard } from './admin-active.guard';

describe('adminActiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminActiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
