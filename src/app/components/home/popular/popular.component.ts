import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
