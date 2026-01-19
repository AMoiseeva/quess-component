import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { TuiAccordion } from '@taiga-ui/experimental';

@Component({
  selector: 'app-accordion',
  imports: [NgForOf, TuiAccordion],
  templateUrl: './accordion.html',
  styleUrl: './accordion.less',
})
export class Accordion {
    protected readonly data = [
      {
        key: 'Taiga UI cdk',
        value:'Комплект пакетов, состоящий из низкоуровневых инструментов и абстракций, используемых для разработки сущностей Taiga UI Angular',
      },
      {
        key: 'Taiga UI core',
        value:'Основные элементы, необходимые для разработки компонентов, директив и многого другого с использованием системы проектирования пользовательского интерфейса Taiga',
      },
      {
        key: 'Taiga UI kit',
        value:'Набор компонентов, используемых для создания Angular-приложений на основе Taiga UI',
      },    
  ];
}
