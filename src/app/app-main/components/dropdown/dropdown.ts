import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { TuiButton, TuiDataList, TuiDropdown } from '@taiga-ui/core';

@Component({
  selector: 'app-dropdown',
  imports: [NgForOf, TuiButton, TuiDataList, TuiDropdown],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.less',
})
export class Dropdown {
    protected readonly items = ['Форкнуть', 'Законтрибьютить', 'Открыть доку', 'Поставить звезду'];

    protected open = true;
        
    protected onClick(): void {
    this.open = false;
  }
}
