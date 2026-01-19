import { Component, Input } from '@angular/core';

interface ResultTier {
  title: string;
  comment: string;
  description: string;
  minPercentage: number;
}

@Component({
  selector: 'app-finish',
  imports: [],
  templateUrl: './finish.html',
  styleUrl: './finish.less',
})
export class Finish {
  @Input() rightAnswers: number = 0;
  @Input() totalQuestions: number = 0;

  resultTiers: ResultTier[] = [
    {
      title: 'Начало пути',
      comment: 'первый шаг сделан',
      description: 'UI-паттерны — это навык, который приходит с практикой. Спасибо, что попробовали, и добро пожаловать в мир осознанных интерфейсов!',
      minPercentage: 0
    },
    {
      title: 'UI-наблюдатель',
      comment: 'есть куда расти',
      description: 'Паттерны пока путаются, но теперь вы точно знаете, на что обращать внимание в интерфейсах. Каждый хороший UI-разработчик начинал с этого.',
      minPercentage: 30
    },
    {
      title: 'Практикующий UI-энтузиаст',
      comment: 'хороший старт',
      description: 'Базовое понимание UI-паттернов есть, а остальное — дело опыта. Самое время чаще заглядывать в документацию и дизайн-системы.',
      minPercentage: 50
    },
    {
      title: 'Уверенный UI-разработчик',
      comment: 'отличный результат',
      description: 'Вы хорошо знаете основные паттерны и понимаете, как они применяются на практике. Немного внимательности к деталям — и будет максимум.',
      minPercentage: 70
    },
    {
      title: 'UI-ниндзя', 
      comment: 'безупречно',
      description: 'Вы отлично ориентируетесь в UI-паттернах и явно работали с дизайн-системами не понаслышке. Taiga UI чувствуется на уровне интуиции.',
      minPercentage: 90
    }
  ];

  get percentage(): number {
    if (this.totalQuestions === 0) return 0;
    return Math.round((this.rightAnswers / this.totalQuestions) * 100);
  }

  get currentResult(): ResultTier {
    const percentage = this.percentage;
    // Find the highest tier that matches the percentage
    for (let i = this.resultTiers.length - 1; i >= 0; i--) {
      if (percentage >= this.resultTiers[i].minPercentage) {
        return this.resultTiers[i];
      }
    }
    return this.resultTiers[0]; // Default to first tier
  }
}
