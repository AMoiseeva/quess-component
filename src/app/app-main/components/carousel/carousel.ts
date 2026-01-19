import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar, TuiCarousel } from '@taiga-ui/kit';

@Component({
  selector: 'app-carousel',
  imports: [TuiAvatar, TuiButton, TuiCarousel, NgFor, TuiCarousel],
  templateUrl: './carousel.html',
  styleUrl: './carousel.less',
})
export class Carousel {
  protected readonly items = [
    {
      name: 'Alex Inkin',
      img: 'https://avatars.githubusercontent.com/u/11832552?s=200&v=4',
    },
    {
      name: 'Roman Sedov',
      img: 'https://avatars.githubusercontent.com/u/10106368?s=200&v=4',
    },
    {
      name: 'Vladimir Potekhin',
      img: 'https://avatars.githubusercontent.com/u/46284632?s=200&v=4',
    },
    {
      name: 'Nikita Barsukov',
      img: 'https://avatars.githubusercontent.com/u/35179038?s=200&v=4',
    },
    {
      name: 'Maksim Ivanov',
      img: 'https://avatars.githubusercontent.com/u/12021443?s=200&v=4',
    },
    {
      name: 'German Panov',
      img: 'https://avatars.githubusercontent.com/u/87331898?s=200&v=4',
    },
  ];
}
