import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaTablaComponent } from './pelicula-tabla.component';

describe('PeliculaTablaComponent', () => {
  let component: PeliculaTablaComponent;
  let fixture: ComponentFixture<PeliculaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
