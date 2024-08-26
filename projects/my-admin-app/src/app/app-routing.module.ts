import { NgModule } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyControlValueAccessorComponent } from './components/my-control-value-accessor/my-control-value-accessor.component';
import { MyTemplateDrivenFormComponent } from './components/my-template-driven-form/my-template-driven-form.component';

const routes: Routes = [
  {
    path:'cva',
    component: MyTemplateDrivenFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
