import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth/auth-guard.service';
import { CardMenuComponent } from './main/card-menu/card-menu.component';

const routes: Routes = [
  { path: 'home', component: CardMenuComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
