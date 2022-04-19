import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
