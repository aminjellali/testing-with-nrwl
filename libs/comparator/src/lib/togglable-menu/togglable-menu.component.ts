import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
  group
} from '@angular/animations';

@Component({
  selector: 'widgets-project-togglable-menu',
  templateUrl: './togglable-menu.component.html',
  styleUrls: ['./togglable-menu.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          'max-height': '1000px',
          opacity: '1',
          visibility: 'visible'
        })
      ),
      state(
        'out',
        style({
          'max-height': '0px',
          opacity: '0',
          visibility: 'hidden'
        })
      ),
      transition('in => out', [
        group([
          animate(
            '400ms ease-in-out',
            style({
              opacity: '0'
            })
          ),
          animate(
            '600ms ease-in-out',
            style({
              'max-height': '0px'
            })
          ),
          animate(
            '700ms ease-in-out',
            style({
              visibility: 'hidden'
            })
          )
        ])
      ]),
      transition('out => in', [
        group([
          animate(
            '1ms ease-in-out',
            style({
              visibility: 'visible'
            })
          ),
          animate(
            '600ms ease-in-out',
            style({
              'max-height': '1000px'
            })
          ),
          animate(
            '800ms ease-in-out',
            style({
              opacity: '1'
            })
          )
        ])
      ])
    ])
  ]
})
export class TogglableMenuComponent implements OnInit {
  @Input('menu-name') menuName: String;
  @Input('open') openAsDefault: boolean;
  ngOnInit() {
    console.log('hello world');
    console.log('bye world');

  }

  constructor() {
    // this.openAsDefault ? undefined : this.openAsDefault = false;
  }
  // reverse switch.
  showOrHide() {
    this.openAsDefault = !this.openAsDefault;
  }
  justForFun(){
    console.log("Just For Fun");
  }
}
