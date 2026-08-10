import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHotel } from './book-hotel';

describe('BookHotel', () => {
  let component: BookHotel;
  let fixture: ComponentFixture<BookHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHotel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookHotel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
