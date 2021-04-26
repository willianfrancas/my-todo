import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(home => home.HomeModule), canActivate: [AuthGuard] },
  { path: 'core', loadChildren: () => import('./core/core.module').then(core => core.CoreModule), canActivate: [AuthGuard] },
  { path: 'main', loadChildren: () => import('./main/main.module').then(main => main.MainModule), canActivate: [AuthGuard] },
]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
