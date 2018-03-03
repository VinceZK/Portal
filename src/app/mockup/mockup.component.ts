import {Component, DoCheck, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mockup',
  template: '<img [src]="mockupUI" style="max-width: 100%">',
  styleUrls: ['./mockup.component.css']
})
export class MockupComponent implements OnInit, DoCheck {

  constructor(private route: ActivatedRoute) { }

  mockupUI: String;

  ngOnInit() { }

  ngDoCheck() {
    this.mockupUI = '../assets/' + this.route.snapshot.paramMap.get('UI') + '.png';
  }

}
