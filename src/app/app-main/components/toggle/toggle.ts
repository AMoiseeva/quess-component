import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-toggle',
  imports: [FormsModule, ReactiveFormsModule, TuiSwitch],
  templateUrl: './toggle.html',
  styleUrl: './toggle.less',
})
export class Toggle {

}
