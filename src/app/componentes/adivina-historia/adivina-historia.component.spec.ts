import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaHistoriaComponent } from './adivina-historia.component';

describe('AdivinaHistoriaComponent', () => {
  let component: AdivinaHistoriaComponent;
  let fixture: ComponentFixture<AdivinaHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
