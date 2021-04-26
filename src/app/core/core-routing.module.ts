import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { CoreComponent } from "./core.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: '', component: CoreComponent, canActivate: [AuthGuard],
    children: [
      { path: 'list', component: ListComponent, canActivate: [AuthGuard] }
    ]
  },

]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
