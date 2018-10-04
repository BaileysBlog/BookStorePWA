import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDirectoryComponent } from './home-directory/home-directory.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeDirectoryComponent
  },
  {
    path: "**", redirectTo:"Home", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
