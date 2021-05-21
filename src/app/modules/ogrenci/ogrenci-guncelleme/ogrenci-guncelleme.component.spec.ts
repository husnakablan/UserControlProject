import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrenciGuncellemeComponent } from './ogrenci-guncelleme.component';

describe('OgrenciGuncellemeComponent', () => {
  let component: OgrenciGuncellemeComponent;
  let fixture: ComponentFixture<OgrenciGuncellemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrenciGuncellemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenciGuncellemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
