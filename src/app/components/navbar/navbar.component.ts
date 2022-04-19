import { Component, OnInit, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  smallmenu:boolean = false;
  enteredButton:boolean = false;
  isMatMenuOpen:boolean = false;
  prevButtonTrigger:any;
  constructor(private ren: Renderer2) { }

  ngOnInit(): void {
  }
  isbright: boolean = false;
  SearchControl = new FormControl('',[Validators.maxLength(20), Validators.minLength(3)] );
  getErrorMessage(){
    return this.SearchControl.hasError('maxlength') ? 'Maximum length is 20' :
    this.SearchControl.hasError('minlength') ? 'Minimum length is 3' :
    'empty';
  }
  menuenter() {
    this.isMatMenuOpen = true;
  }
  menuLeave(trigger:any, button:any) {
    setTimeout(() => {
      if (!this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80)
  }

  
  buttonEnter(trigger:any) {
    setTimeout(() => {
      if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        trigger.openMenu();
      }
      else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu();
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }
    })
  }

  buttonLeave(trigger:any, button:any) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } else {
        this.enteredButton = false;
      }
    }, 100)
  }
  open_smallmenu(){
    this.smallmenu = !this.smallmenu;
    console.log('hello');
  }
}
