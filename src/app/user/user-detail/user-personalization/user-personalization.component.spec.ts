import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalizationComponent } from './user-personalization.component';

describe('UserPersonalizationComponent', () => {
  let component: UserPersonalizationComponent;
  let fixture: ComponentFixture<UserPersonalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPersonalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
