import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
