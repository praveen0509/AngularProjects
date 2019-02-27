import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAndSidebarComponent } from './body-and-sidebar.component';

describe('BodyAndSidebarComponent', () => {
  let component: BodyAndSidebarComponent;
  let fixture: ComponentFixture<BodyAndSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAndSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAndSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
