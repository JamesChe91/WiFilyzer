import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentConnectionComponent } from './current-Connection.component';

describe('CurrentConnectionComponent', () => {
  let component: CurrentConnectionComponent;
  let fixture: ComponentFixture<CurrentConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
