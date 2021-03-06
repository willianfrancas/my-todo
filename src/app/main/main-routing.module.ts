import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '../auth/auth-guard.service';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { CardMenuComponent } from './card-menu/card-menu.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [AuthGuard],
    children: [
      { path: 'menu', component: CardMenuComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    ]
  },
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
export class MainRoutingModule { }
