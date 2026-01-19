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
    Select
  ],
  templateUrl: './app-main.html',
  styleUrl: './app-main.less',
})
export class AppMain {
  currentPage = 1;
  rightAnswers = 0;
  showResult = false;
  isCorrect = false;
  answerControl = new FormControl<string | null>(null);
  
  quizQuestions: QuizQuestion[] = [
    {
      component: 'start',
      options: [],
      correctAnswer: 0
    },
    {
      component: 'select',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'carousel',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'accordion',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'toggle',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'paginator',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'dropdown',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'stepper',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'progress',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'radio',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
    },
    {
      component: 'tooltip',
      options: ['Radio', 'Select', 'Checkbox', 'Button', 'Dialog', 'Tooltip', 'ProgressCircle', 'Stepper', 'Sheet', 'Dropdown', 'Paginator', 'Toggle', 'Accordion', 'Carousel', 'Breadcrumbs', 'Wysiwyg', 'Button', 'Input'],
      correctAnswer: 1
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

    if (!!answer && answer !== '') {
      this.isCorrect = answer === this.currentAnswer;
      this.showResult = true;

      if(this.isCorrect) {
        this.rightAnswers++;
      }
    }
  }

  goToNextPage(): void {
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
