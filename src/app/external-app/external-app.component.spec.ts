import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAppComponent } from './external-app.component';

describe('ExternalAppComponent', () => {
  let component: ExternalAppComponent;
  let fixture: ComponentFixture<ExternalAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
