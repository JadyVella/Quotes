import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHacksFormComponent } from './life-hacks-form.component';

describe('LifeHacksFormComponent', () => {
  let component: LifeHacksFormComponent;
  let fixture: ComponentFixture<LifeHacksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeHacksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHacksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
