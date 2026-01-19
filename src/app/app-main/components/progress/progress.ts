import { Component } from '@angular/core';
import { TuiProgress } from '@taiga-ui/kit';

@Component({
  selector: 'app-progress',
  imports: [TuiProgress],
  templateUrl: './progress.html',
  styleUrl: './progress.less',
})
export class Progress {
    value = 47;
}
