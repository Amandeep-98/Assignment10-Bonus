import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycontentComponent } from './displaycontent.component';

describe('DisplaycontentComponent', () => {
  let component: DisplaycontentComponent;
  let fixture: ComponentFixture<DisplaycontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
