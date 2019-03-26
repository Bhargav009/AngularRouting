import { TestBed, inject } from '@angular/core/testing';

import { AuthAdminGuard } from './auth-admin-guard.service';

describe('AuthAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdminGuard]
    });
  });

  it('should be created', inject([AuthAdminGuard], (service: AuthAdminGuard) => {
    expect(service).toBeTruthy();
  }));
});
