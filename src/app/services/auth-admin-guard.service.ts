import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    let user = this.authService.currentUser;
    if (user.admin)
      return true;
    this.router.navigate(['/no-access']);
    return false;
  }
}
