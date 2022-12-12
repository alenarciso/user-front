import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCadComponent } from './components/user-cad/user-cad.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path:"user-list",
    component:UserListComponent
  },
  {
    path:"user-cad",
    component:UserCadComponent
  },
  {
    path:"user-edit/:id",
    component:UserCadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
