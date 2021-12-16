import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabuComponent } from './charactor/babu/babu.component';
import { RajuComponent } from './charactor/raju/raju.component';

const routes: Routes = [
  {path:"raju", component: RajuComponent},
  {path:"babu", component:BabuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
