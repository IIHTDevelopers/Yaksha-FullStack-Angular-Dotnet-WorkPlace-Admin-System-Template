import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Set up routing in the app
  exports: [RouterModule] // Export RouterModule for use in the app
})
export class AppRoutingModule { }
