import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrenciEklemeComponent } from './ogrenci-ekleme.component';

describe('OgrenciEklemeComponent', () => {
  let component: OgrenciEklemeComponent;
  let fixture: ComponentFixture<OgrenciEklemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrenciEklemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenciEklemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
