import { Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiTooltip } from '@taiga-ui/kit';

@Component({
  selector: 'app-tooltip',
  imports: [TuiTooltip, TuiIcon],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.less',
})
export class Tooltip {

}
