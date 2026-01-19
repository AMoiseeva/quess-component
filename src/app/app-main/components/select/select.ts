import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper } from '@taiga-ui/kit';
	import {TuiSelect} from '@taiga-ui/kit';

@Component({
  selector: 'app-select',
  imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect, TuiTextfield],
  templateUrl: './select.html',
  styleUrl: './select.less',
})
export class Select {
    protected readonly users = [
        '@maskito/core',
        '@taiga-ui/polymorpheus',
        '@taiga-ui/event-plugins',
        '@taiga-ui/dompurify'
    ];
 
    protected value: string | null = null;
}
