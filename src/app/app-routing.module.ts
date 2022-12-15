import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailcarsComponent } from './detailcars/detailcars.component';
import { ListcarsComponent } from './listcars/listcars.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'list',
    component:ListcarsComponent
  },
  {
    path:'carsdetail/:id',
    component:DetailcarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
