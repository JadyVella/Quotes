import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHacksDetailsComponent } from './life-hacks-details.component';

describe('LifeHacksDetailsComponent', () => {
  let component: LifeHacksDetailsComponent;
  let fixture: ComponentFixture<LifeHacksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeHacksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHacksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
