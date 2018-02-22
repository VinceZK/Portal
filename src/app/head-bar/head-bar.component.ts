import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {
  @Output() onCollapse = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.onCollapse.emit();
  }
}
