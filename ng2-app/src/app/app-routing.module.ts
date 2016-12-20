import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',        component: HomeComponent},
  {path: 'widgets', component: WidgetsComponent },
  {path: '*',       redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
