import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { AppMain } from './app-main/app-main';

@Component({
  selector: 'app-root',
  imports: [AppMain, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('quess-component');
}
