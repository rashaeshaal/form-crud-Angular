import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { EditComponent } from './components/edit/edit.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'form',component: FormComponent},
  {path:'edit/:id',component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
