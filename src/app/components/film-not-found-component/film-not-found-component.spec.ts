import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmNotFoundComponent } from './film-not-found-component';

describe('FilmNotFoundComponent', () => {
  let component: FilmNotFoundComponent;
  let fixture: ComponentFixture<FilmNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
