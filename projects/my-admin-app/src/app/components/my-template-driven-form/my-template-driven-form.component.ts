import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-template-driven-form',
  templateUrl: './my-template-driven-form.component.html',
  styleUrls: ['./my-template-driven-form.component.scss']
})
export class MyTemplateDrivenFormComponent {
  user: any = { email: "test@gmail.com111" };
  onSubmit(form: any) {
    console.log(form.value);
  }
}
