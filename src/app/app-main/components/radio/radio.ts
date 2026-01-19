import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TuiRadioList} from '@taiga-ui/kit';

@Component({
  selector: 'app-radio',
  imports: [TuiRadioList, FormsModule, ReactiveFormsModule],
  templateUrl: './radio.html',
  styleUrl: './radio.less',
})
export class Radio {
  form = new FormControl<string | null>(null);
  items = ['Taiga UI', 'Maskito', 'TUI Editor'];
}
