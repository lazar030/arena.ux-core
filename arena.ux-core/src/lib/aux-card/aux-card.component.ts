import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aux-card',
  templateUrl: './aux-card.component.html',
  styleUrls: ['./aux-card.component.scss']
})
export class AuxCardComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
