import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiSelectLike, TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper } from '@taiga-ui/kit';
import {TuiSelect} from '@taiga-ui/kit';
import {TuiDropdown} from '@taiga-ui/core';

@Component({
  selector: 'app-select',
  imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect, TuiTextfield, TuiDropdown, TuiSelectLike],
  templateUrl: './select.html',
  styleUrl: './select.less',
})
export class Select implements OnInit {
    protected readonly users = [
        '@maskito/core',
        '@taiga-ui/polymorpheus',
        '@taiga-ui/event-plugins',
        '@taiga-ui/dompurify'
    ];
 
    protected value: string | null = null;

    protected open = false;

    ngOnInit(): void {
        this.open = true;
    }
}
