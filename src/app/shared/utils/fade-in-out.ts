import {animate, state, style, transition, trigger} from "@angular/animations";

export var FadeInOut = trigger('fadeInOut', [
  state('in', style({opacity: 1, transform: 'translateY(0)'})),
  transition('void => *', [
    style({opacity: 0, transform: 'translateY(75%)'}),
    animate(1000)
  ])
])
