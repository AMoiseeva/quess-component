import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { TuiStepper } from '@taiga-ui/kit';

@Component({
  selector: 'app-stepper',
  imports: [NgForOf, TuiStepper],
  templateUrl: './stepper.html',
  styleUrl: './stepper.less',
})
export class Stepper {
    protected readonly steps = ['Установить Taiga UI', 'Использовать Taiga UI', 'Рассказать всем друзьям про Taiga UI', 'Любить Taiga UI <3'];
}
