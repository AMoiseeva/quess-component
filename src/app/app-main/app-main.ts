import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { 
  TuiButton,
  TuiNotification
} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Radio } from './components/radio/radio';
import { Start } from './components/start/start';
import { Finish } from './components/finish/finish';
import { Tooltip } from './components/tooltip/tooltip';
import { Progress } from './components/progress/progress';
import { Stepper } from './components/stepper/stepper';
import { Dropdown } from './components/dropdown/dropdown';
import { Toggle } from './components/toggle/toggle';
import { Paginator } from './components/paginator/paginator';
import { Accordion } from './components/accordion/accordion';
import { Carousel } from './components/carousel/carousel';
import { Select } from './components/select/select';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiAnimated} from '@taiga-ui/cdk';

interface QuizQuestion {
  component: string;
  options: string[];
  correctAnswer: number; // Index of correct answer
}

@Component({
  selector: 'app-main',
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    TuiButton,
    Radio,
    Start,
    TuiProgress,
    Finish,
    TuiNotification,
    Tooltip,
    Progress,
    Stepper,
    Dropdown,
    Toggle,
    Paginator,
    Accordion,
    Carousel,
    Select,
    TuiAppearance,
    TuiCardLarge,
    TuiAnimated
  ],
  templateUrl: './app-main.html',
  styleUrl: './app-main.less',
})
export class AppMain {
  currentPage = 1;
  rightAnswers = 0;
  showResult = false;
  isCorrect = false;
  isDisable = false;
  answerControl = new FormControl<string | null>(null);
  answer = '';
  
  quizQuestions: QuizQuestion[] = [
    {
      component: 'start',
      options: [],
      correctAnswer: 0
    },
    {
      component: 'select',
      options: ['Accordion', 'Breadcrumbs', 'Button', 'Carousel', 'Checkbox', 'Dialog', 'Dropdown', 'Input', 'Paginator', 'ProgressCircle','Radio', 'Select', 'Sheet', 'Stepper', 'Toggle', 'Tooltip', 'Wysiwyg'],
      correctAnswer: 11
    },
    {
      component: 'tooltip',
      options: ['Accordion', 'Breadcrumbs', 'Button', 'Carousel', 'Checkbox', 'Dialog', 'Dropdown', 'Input', 'Paginator', 'ProgressCircle','Radio', 'Sheet', 'Stepper', 'Toggle', 'Tooltip', 'Wysiwyg'],
      correctAnswer: 14
    },
    {
      component: 'carousel',
      options: ['Accordion', 'Breadcrumbs', 'Button', 'Carousel', 'Checkbox', 'Dialog', 'Dropdown', 'Input', 'Paginator', 'ProgressCircle','Radio', 'Sheet', 'Stepper', 'Toggle', 'Wysiwyg'],
      correctAnswer: 3
    },
    {
      component: 'progress',
      options: ['Accordion', 'Breadcrumbs', 'Button', 'Checkbox', 'Dialog', 'Dropdown', 'Input', 'Paginator', 'ProgressCircle','Radio', 'Sheet', 'Stepper', 'Toggle', 'Wysiwyg'],
      correctAnswer: 8
    },
    {
      component: 'accordion',
      options: ['Accordion', 'Breadcrumbs', 'Button', 'Checkbox', 'Dialog', 'Dropdown', 'Input', 'Paginator','Radio', 'Sheet', 'Stepper', 'Toggle', 'Wysiwyg'],
      correctAnswer: 0
    },
    {
      component: 'toggle',
      options: ['Breadcrumbs', 'Button', 'Checkbox', 'Dialog', 'Dropdown', 'Input', 'Paginator','Radio', 'Sheet', 'Stepper', 'Toggle', 'Wysiwyg'],
      correctAnswer: 10
    },
    {
      component: 'paginator',
      options: ['Breadcrumbs', 'Button', 'Checkbox', 'Dialog', 'Dropdown', 'Input', 'Paginator','Radio', 'Sheet', 'Stepper', 'Wysiwyg'],
      correctAnswer: 6
    },
    {
      component: 'dropdown',
      options: ['Breadcrumbs', 'Button', 'Checkbox', 'Dialog', 'Dropdown', 'Input','Radio', 'Sheet', 'Stepper', 'Wysiwyg'],
      correctAnswer: 4
    },
    {
      component: 'stepper',
      options: ['Breadcrumbs', 'Button', 'Checkbox', 'Dialog', 'Input','Radio', 'Sheet', 'Stepper', 'Wysiwyg'],
      correctAnswer: 7
    },
    {
      component: 'radio',
      options: ['Breadcrumbs', 'Button', 'Checkbox', 'Dialog', 'Input','Radio', 'Sheet', 'Wysiwyg'],
      correctAnswer: 5
    },
    {
      component: 'finish',
      options: [],
      correctAnswer: 0
    },
  ];

  totalPages = this.quizQuestions.length;

  get currentQuestion(): QuizQuestion {
    return this.quizQuestions[this.currentPage - 1];
  }

  get currentAnswer(): string {
    const index = this.quizQuestions[this.currentPage - 1].correctAnswer;
    const options = this.quizQuestions[this.currentPage - 1].options;
    return options[index];
  }

  submitAnswer(answer: string): void {
    this.isDisable = true;
    this.answer = answer;

    if (!!answer && answer !== '') {
      this.isCorrect = answer === this.currentAnswer;
      this.showResult = true;

      if(this.isCorrect) {
        this.rightAnswers++;
      }
    }
  }

  goToNextPage(): void {
    this.isDisable = false;

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.resetAnswerState();
    }
  }

  resetQuiz(): void {
    this.currentPage = 1;
    this.rightAnswers = 0;
    this.resetAnswerState();
  }

  start(): void {
    this.currentPage++;
    this.isDisable = false;
  }

  finish(): void {
    this.currentPage++;
    this.resetAnswerState();
  }

  private resetAnswerState(): void {
    // this.answerControl.reset(null);
    this.showResult = false;
    this.isCorrect = false;
  }
}
