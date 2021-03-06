import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilsPage } from '././appareils/appareils.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'appareils', component: AppareilsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
