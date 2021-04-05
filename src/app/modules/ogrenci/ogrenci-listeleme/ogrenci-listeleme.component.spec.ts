import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrenciListelemeComponent } from './ogrenci-listeleme.component';

describe('OgrenciListelemeComponent', () => {
  let component: OgrenciListelemeComponent;
  let fixture: ComponentFixture<OgrenciListelemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrenciListelemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenciListelemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
